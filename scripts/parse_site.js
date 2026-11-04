const fs = require('fs');
const html = fs.readFileSync('scripts/site_original.html', 'utf8');

const title = html.match(/<title>([^<]+)<\/title>/i);
console.log('TITLE:', title ? title[1] : 'N/A');

const desc = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
console.log('DESC:', desc ? desc[1] : 'N/A');

const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
let match;
const images = [];
while ((match = imgRegex.exec(html)) !== null) {
  images.push(match[1]);
}
console.log('IMAGE COUNT:', images.length);
console.log('IMAGES SAMPLE:', images.slice(0, 25));

const hRegex = /<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi;
const headings = [];
while ((match = hRegex.exec(html)) !== null) {
  const text = match[2].replace(/<[^>]+>/g, '').trim();
  if (text) headings.push(`${match[1]}: ${text}`);
}
console.log('HEADINGS:', headings);
