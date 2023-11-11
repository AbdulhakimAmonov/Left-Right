function moveLeft() {
    var box = document.getElementById('movingBox');
    var currentPosition = box.offsetLeft;
    var newPosition = currentPosition - 50;
    box.style.left = newPosition + 'px';
}

function moveRight() {
    var box = document.getElementById('movingBox');
    var currentPosition = box.offsetLeft;
    var newPosition = currentPosition + 50;
    box.style.left = newPosition + 'px';
}

function abigstepleft() {
    var box = document.getElementById('movingBox');
    var currentPosition = box.offsetLeft;
    var newPosition = currentPosition - 100;
    box.style.left = newPosition + 'px';
}

function abigstepright() {
    var box = document.getElementById('movingBox');
    var currentPosition = box.offsetLeft;
    var newPosition = currentPosition + 100;
    box.style.left = newPosition + 'px';
}