function createDiv() {
  const tmpDiv = document.createElement('div');
  tmpDiv.style.background = 'yellow';
  tmpDiv.style.height = '100px';
  tmpDiv.style.width = '100px';
  document.body.appendChild(tmpDiv);
}

createDiv();
