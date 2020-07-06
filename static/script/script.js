
const keys = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
};

function handleKey (e) {
    switch (e.keyCode) {
        case keys.left:
            alert('Left key is pressed');
            break;
        case keys.up:
             alert('Up  key is pressed')
             break;
        case keys.right:
            alert('Right key is pressed')
             break;
        case keys.down:
            alert('Down key is pressed')
            break;
    }
};


window.addEventListener("keydown", handleKey);
