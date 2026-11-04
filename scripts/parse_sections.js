const fs = require('fs');
const html = fs.readFileSync('scripts/site_original.html', 'utf8');

// search for headings and the images inside each section
const sections = html.split(/vc_row/);
for (const s of sections) {
  const h = s.match(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/i);
  const imgs = [...s.matchAll(/src=["']([^"']+)["']/gi)].map(m => m[1].split('/').pop());
  if (h && imgs.length > 0) {
    console.log('HEADING:', h[1].replace(/<[^>]+>/g, '').trim());
    console.log('IMAGES:', imgs);
    console.log('----------------');
  }
}
