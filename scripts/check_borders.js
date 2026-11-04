const sharp = require('sharp');
const fs = require('fs');

const inputLogo = 'C:/Users/matheus/.gemini/antigravity/brain/d997532f-2ac2-43dc-bd5f-c4905b9b379e/.user_uploaded/media_1793818772035_9db69ca7.png';

async function checkBorders() {
  const { data, info } = await sharp(inputLogo).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  // Check top-left 10x10
  console.log('Sample top-left pixel:', {
    r: data[0], g: data[1], b: data[2], a: data[3]
  });

  // Check if pixels outside the letters are transparent (a === 0)
  let zeroAlpha = 0;
  let fullAlpha = 0;
  let partialAlpha = 0;
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a === 0) zeroAlpha++;
    else if (a === 255) fullAlpha++;
    else partialAlpha++;
  }
  console.log('Alpha distribution:', {
    total: width * height,
    zeroAlpha,
    fullAlpha,
    partialAlpha
  });
}

checkBorders().catch(console.error);
