const sharp = require('sharp');
const fs = require('fs');

const inputLogo = 'C:/Users/matheus/.gemini/antigravity/brain/d997532f-2ac2-43dc-bd5f-c4905b9b379e/.user_uploaded/media_1793818772035_9db69ca7.png';

async function main() {
  const meta = await sharp(inputLogo).metadata();
  console.log('Logo Metadata:', meta);

  const stats = await sharp(inputLogo).stats();
  console.log('Channels stats:', stats.channels.map((c, i) => ({
    channel: i,
    min: c.min,
    max: c.max,
    mean: Math.round(c.mean)
  })));
  if (stats.dominant) {
    console.log('Dominant color:', stats.dominant);
  }
}

main().catch(console.error);
