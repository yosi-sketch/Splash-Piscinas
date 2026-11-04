const sharp = require('sharp');

async function analyze() {
  const { data, info } = await sharp('public/logo.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const colorCounts = {};
  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = info.channels === 4 ? data[i + 3] : 255;
    if (a < 50) continue; // ignore transparent
    // bucket colors
    const br = Math.round(r / 16) * 16;
    const bg = Math.round(g / 16) * 16;
    const bb = Math.round(b / 16) * 16;
    const key = `${br},${bg},${bb}`;
    colorCounts[key] = (colorCounts[key] || 0) + 1;
  }

  const sorted = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
  console.log('Top colors (RGB):');
  for (const [col, count] of sorted.slice(0, 20)) {
    const [r, g, b] = col.split(',').map(Number);
    const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    console.log(`${hex} (rgb ${col}) -> ${count}`);
  }
}

analyze();
