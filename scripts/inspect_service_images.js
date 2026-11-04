const sharp = require('sharp');

async function inspect() {
  const list = [
    'aquecedores.jpg',
    'sauna-spa.jpg',
    'acessorios-iluminacao.jpg',
    'aquecedor-real.jpg',
    'spa-real.jpg',
    'cascata-real.jpg',
    'quimicos-loja-fachada.jpg'
  ];
  for (const f of list) {
    const meta = await sharp('public/' + f).metadata();
    console.log(f, meta.width, 'x', meta.height, meta.format);
  }
}
inspect();
