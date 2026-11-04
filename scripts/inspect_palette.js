const sharp = require('sharp');
const fs = require('fs');

const inputLogo = 'C:/Users/matheus/.gemini/antigravity/brain/d997532f-2ac2-43dc-bd5f-c4905b9b379e/.user_uploaded/media_1793818772035_9db69ca7.png';

async function analyze() {
  const { data, info } = await sharp(inputLogo).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  // Let's find color clusters for non-transparent pixels
  // Also find bounding box of alpha > 20
  let minX = width, maxX = 0, minY = height, maxY = 0;
  
  const pinks = [];
  const cyans = [];
  const blues = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];

      if (a > 30) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;

        // Categorize non-white/non-black colors
        const maxVal = Math.max(r, g, b);
        const minVal = Math.min(r, g, b);
        const isColorful = (maxVal - minVal) > 40 && maxVal > 60;

        if (isColorful) {
          if (r > 150 && g < 100 && b > 80) {
            pinks.push({ r, g, b });
          } else if (g > 150 && b > 180 && r < 100) {
            cyans.push({ r, g, b });
          } else if (b > 160 && r < 80 && g < 160) {
            blues.push({ r, g, b });
          }
        }
      }
    }
  }

  console.log('Bounding Box:', { minX, maxX, minY, maxY, w: maxX - minX, h: maxY - minY });

  function avgColor(arr) {
    if (!arr.length) return null;
    const sum = arr.reduce((acc, c) => ({ r: acc.r + c.r, g: acc.g + c.g, b: acc.b + c.b }), { r: 0, g: 0, b: 0 });
    const r = Math.round(sum.r / arr.length);
    const g = Math.round(sum.g / arr.length);
    const b = Math.round(sum.b / arr.length);
    const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    return { r, g, b, hex, count: arr.length };
  }

  console.log('Pink Palette:', avgColor(pinks));
  console.log('Cyan Palette:', avgColor(cyans));
  console.log('Blue Palette:', avgColor(blues));
}

analyze().catch(console.error);
