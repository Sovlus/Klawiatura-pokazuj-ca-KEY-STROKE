document.addEventListener('keydown', function(event) {
  var keyCode = event.keyCode;
  var keyElement = document.getElementById('key-' + keyCode);
  if (keyElement) {
    keyElement.classList.add('active');
  }
});

document.addEventListener('keyup', function(event) {
  var keyCode = event.keyCode;
  var keyElement = document.getElementById('key-' + keyCode);
  if (keyElement) {
    keyElement.classList.remove('active');
  }
});
