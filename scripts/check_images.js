const sharp = require('sharp');
const fs = require('fs');

async function check() {
  const files = fs.readdirSync('public');
  for (const f of files) {
    if (f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')) {
      const meta = await sharp(`public/${f}`).metadata();
      console.log(`${f}: ${meta.width}x${meta.height} (${meta.format})`);
    }
  }
}
check();
