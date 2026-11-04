const sharp = require('sharp');

// loja-fachada.jpg is 1024 x 767
// Let's create two crops:
// 1. Zoomed in on the stacks of HTH & Genco chlorine buckets (around x: 670, y: 560, w: 280, h: 200)
sharp('public/loja-fachada.jpg')
  .extract({ left: 660, top: 540, width: 280, height: 210 })
  .resize(800, 600, { fit: 'cover' })
  .jpeg({ quality: 90 })
  .toFile('public/quimicos-hth-genco.jpg')
  .then(() => console.log('quimicos-hth-genco.jpg created successfully'));
