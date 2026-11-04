const fs = require('fs');
const html = fs.readFileSync('scripts/site_original.html', 'utf8');

// find all occurrences of wp-content/uploads images and their surrounding context
const imgRegex = /<img[^>]+src=["'](https?:\/\/[^"']+)["'][^>]*>/gi;
let match;
while ((match = imgRegex.exec(html)) !== null) {
  const src = match[1];
  const idx = match.index;
  const snippet = html.substring(Math.max(0, idx - 150), Math.min(html.length, idx + 250))
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  console.log('FILE:', src.split('/').pop());
  console.log('CONTEXT:', snippet.substring(0, 140));
  console.log('---');
}
