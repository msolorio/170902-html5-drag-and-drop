

function dragStartHandler(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOverHandler(e) {
  e.preventDefault();

  e.dataTransfer.dropEffect = 'move';
}

function dropHandler(e) {
  e.preventDefault();

  var data = e.dataTransfer.getData('text/plain');
  e.target.appendChild(document.getElementById(data));
}

document.addEventListener('DOMContentLoaded', function() {

  var draggableDiv = document.getElementById('draggableDiv');
  var targetDiv = document.getElementById('target');

  draggableDiv.addEventListener('dragstart', function(e) {
    dragStartHandler(e);
  });

  draggableDiv.addEventListener('dragend', function(e) {
    console.log('drag ended');
  });

  targetDiv.addEventListener('drop', function(e) {
    dropHandler(e);
  });

  targetDiv.addEventListener('dragover', function(e) {
    dragOverHandler(e);
  });

});
