function dragStartHandler(e) {
  console.log('dragStartHandler');

  e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOverHandler(e) {
  e.preventDefault();

  e.dataTransfer.dropEffect = 'move';
}

function dropHandler(e) {
  e.preventDefault();

  var data = e.dataTransfer.getData('text');
  e.target.appendChild(document.getElementById(data));
}
