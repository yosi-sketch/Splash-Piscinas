const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputLogo = 'C:/Users/matheus/.gemini/antigravity/brain/d997532f-2ac2-43dc-bd5f-c4905b9b379e/.user_uploaded/media_1793818772035_9db69ca7.png';
const pubDir = path.resolve('public');
const appDir = path.resolve('app');
const sourcePoolDir = path.resolve('..', '1Sol e Piscina', 'public');

if (!fs.existsSync(pubDir)) {
  fs.mkdirSync(pubDir, { recursive: true });
}

async function run() {
  console.log('1. Copying pool photography from source to public...');
  if (fs.existsSync(sourcePoolDir)) {
    const files = fs.readdirSync(sourcePoolDir);
    for (const f of files) {
      if (
        f.startsWith('logo') ||
        f.startsWith('brand-') ||
        f.startsWith('icon') ||
        f === 'favicon.ico' ||
        f === 'apple-icon.png' ||
        f === 'og-image.jpg' ||
        f.startsWith('sol-piscina')
      ) {
        continue;
      }
      const srcFile = path.join(sourcePoolDir, f);
      const dstFile = path.join(pubDir, f);
      fs.copyFileSync(srcFile, dstFile);
    }
    console.log('Copied pool images to public/');
  }

  console.log('2. Processing Splash Piscinas logo...');
  const trimmedLogoBuffer = await sharp(inputLogo)
    .trim()
    .toBuffer();

  await sharp(trimmedLogoBuffer)
    .png({ quality: 100 })
    .toFile(path.join(pubDir, 'logo.png'));
  await sharp(trimmedLogoBuffer)
    .png({ quality: 100 })
    .toFile(path.join(pubDir, 'logo-clean.png'));
  console.log('Saved public/logo.png and public/logo-clean.png');

  // Extract iGUi seal: minX: 700, maxX: 1023, minY: 450, maxY: 711
  const rawIgui = await sharp(inputLogo)
    .extract({
      left: 700,
      top: 450,
      width: 320,
      height: 260
    })
    .toBuffer();

  const iguiSealBuffer = await sharp(rawIgui)
    .trim()
    .toBuffer();

  await sharp(iguiSealBuffer)
    .png()
    .toFile(path.join(pubDir, 'igui-seal.png'));
  console.log('Saved public/igui-seal.png');

  // Extract water splash droplets
  const rawSplashDrop = await sharp(inputLogo)
    .extract({
      left: 480,
      top: 0,
      width: 240,
      height: 300
    })
    .toBuffer();

  const splashDropBuffer = await sharp(rawSplashDrop)
    .trim()
    .toBuffer();

  await sharp(splashDropBuffer)
    .png()
    .toFile(path.join(pubDir, 'splash-droplets.png'));
  console.log('Saved public/splash-droplets.png');

  // Create favicon emblem:
  const makeAppIcon = async (size, outPath) => {
    const pad = Math.round(size * 0.08);
    const innerSize = size - pad * 2;
    const resizedLogo = await sharp(trimmedLogoBuffer)
      .resize(innerSize, innerSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();

    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
      .composite([{ input: resizedLogo, top: pad, left: pad }])
      .png()
      .toFile(outPath);
  };

  await makeAppIcon(512, path.join(pubDir, 'icon-512x512.png'));
  await makeAppIcon(512, path.join(pubDir, 'icon.png'));
  await makeAppIcon(192, path.join(pubDir, 'icon-192x192.png'));
  await makeAppIcon(180, path.join(pubDir, 'apple-icon.png'));
  await makeAppIcon(48, path.join(pubDir, 'icon-48x48.png'));
  await makeAppIcon(32, path.join(pubDir, 'icon-32x32.png'));
  await makeAppIcon(16, path.join(pubDir, 'icon-16x16.png'));

  // Create favicon.ico from 32x32
  const icon32 = await sharp(path.join(pubDir, 'icon-32x32.png')).toBuffer();
  fs.writeFileSync(path.join(pubDir, 'favicon.ico'), icon32);

  // Sync to app/ for Next.js App Router metadata conventions
  fs.copyFileSync(path.join(pubDir, 'favicon.ico'), path.join(appDir, 'favicon.ico'));
  fs.copyFileSync(path.join(pubDir, 'icon.png'), path.join(appDir, 'icon.png'));
  fs.copyFileSync(path.join(pubDir, 'apple-icon.png'), path.join(appDir, 'apple-icon.png'));
  console.log('Generated all favicon and app icons in public/ and app/');

  // 3. Generate High-End OpenGraph Image (1200x630)
  const ogLogoResized = await sharp(trimmedLogoBuffer)
    .resize(460, 240, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const ogSvg = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#04152d" />
          <stop offset="50%" stop-color="#07224f" />
          <stop offset="100%" stop-color="#051937" />
        </linearGradient>
        <radialGradient id="pinkGlow" cx="15%" cy="25%" r="50%">
          <stop offset="0%" stop-color="#e6007e" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#e6007e" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="cyanGlow" cx="85%" cy="75%" r="50%">
          <stop offset="0%" stop-color="#07c9f3" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#07c9f3" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)" />
      <rect width="1200" height="630" fill="url(#pinkGlow)" />
      <rect width="1200" height="630" fill="url(#cyanGlow)" />
      
      <!-- Top Badge -->
      <g transform="translate(80, 50)">
        <rect width="390" height="38" rx="19" fill="#e6007e" fill-opacity="0.25" stroke="#e6007e" stroke-width="1.5" />
        <text x="195" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="2">LAGOA SANTA - MG · EXCLUSIVIDADE iGUi</text>
      </g>

      <!-- Headline -->
      <text x="80" y="370" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="900" fill="#ffffff" letter-spacing="-1">Sua Piscina dos Sonhos Está Aqui</text>
      <text x="80" y="420" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="700" fill="#07c9f3">+500 Famílias Realizadas com a Splash Piscinas</text>
      
      <!-- Proof & Address -->
      <g transform="translate(80, 465)">
        <text x="0" y="20" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#f59e0b">★ 4,1 no Google (40 avaliações) · 15 Anos de Garantia de Fábrica</text>
        <text x="0" y="52" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="#cbd5e1">Av. Acdo. Nilo Figueiredo, 3280 - Dr. Lund · Lagoa Santa - MG</text>
      </g>

      <!-- WhatsApp CTA pill -->
      <g transform="translate(80, 545)">
        <rect width="360" height="50" rx="12" fill="#25d366" />
        <text x="180" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="800" fill="#ffffff" text-anchor="middle">WhatsApp: (31) 97529-9630</text>
      </g>
    </svg>
  `);

  await sharp(ogSvg)
    .composite([
      { input: ogLogoResized, top: 95, left: 75 }
    ])
    .jpeg({ quality: 92 })
    .toFile(path.join(pubDir, 'og-image.jpg'));
  console.log('Saved public/og-image.jpg');
}

run().catch(console.error);
