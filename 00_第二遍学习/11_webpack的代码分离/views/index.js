console.log('---views下的index.js---');

import './index.css';

function createElementImage() {
  const image = document.createElement('img');
  image.style.width = '100px';
  image.style.height = '100px';
  image.src = require('imgs/nhlt.jpg');
  image.style.backgroundSize = 'cover';
  document.body.appendChild(image);
}
createElementImage();

function createImage2() {
  const tmpDiv = document.createElement('div');
  tmpDiv.className = 'zzhImage';
  document.body.appendChild(tmpDiv);
}
createImage2();
