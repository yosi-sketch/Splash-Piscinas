const sharp = require('sharp');

const inputLogo = 'C:/Users/matheus/.gemini/antigravity/brain/d997532f-2ac2-43dc-bd5f-c4905b9b379e/.user_uploaded/media_1793818772035_9db69ca7.png';

async function findIgUi() {
  const { data, info } = await sharp(inputLogo).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  // iGUi is located in the bottom right quadrant: x > 700, y > 450
  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 450; y < height; y++) {
    for (let x = 700; x < width; x++) {
      const idx = (y * width + x) * 4;
      const a = data[idx + 3];
      if (a > 30) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log('iGUi Bounding Box:', { minX, maxX, minY, maxY, w: maxX - minX, h: maxY - minY });

  // Splash water drop bounds (top center: y < 350, x between 400 and 750)
  let dropMinX = width, dropMaxX = 0, dropMinY = height, dropMaxY = 0;
  for (let y = 0; y < 300; y++) {
    for (let x = 400; x < 750; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx], g = data[idx+1], b = data[idx+2], a = data[idx+3];
      // cyan or blue drop
      if (a > 50 && (b > 150 || g > 150) && r < 120) {
        if (x < dropMinX) dropMinX = x;
        if (x > dropMaxX) dropMaxX = x;
        if (y < dropMinY) dropMinY = y;
        if (y > dropMaxY) dropMaxY = y;
      }
    }
  }
  console.log('Splash Droplets Bounding Box:', { dropMinX, dropMaxX, dropMinY, dropMaxY, w: dropMaxX - dropMinX, h: dropMaxY - dropMinY });
}

findIgUi().catch(console.error);
