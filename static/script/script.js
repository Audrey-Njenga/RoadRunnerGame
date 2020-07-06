const keys = {
    left: 37,
    up: 38,
    right: 39,
    down: 40
};

function handleKey(e) {
    let start_item = document.querySelector(".grid-item.selected"),
        row = start_item.getAttribute("data-row"),
        col = start_item.getAttribute("data-column"),
        arrow = false;
    switch (e.keyCode) {
        case keys.left:
            col = Number.parseInt(col) - 1;
            alert('Left key is pressed');
            arrow = true;
            break;
        case keys.up:
            row = Number.parseInt(row) - 1;
            alert('Up  key is pressed');
            arrow = true;
            break;
        case keys.right:
            col = Number.parseInt(col) + 1;
            alert('Right key is pressed');
            arrow = true;
            break;
        case keys.down:
            row = Number.parseInt(row) + 1;
            alert('Down key is pressed');
            arrow = true;
            break;
    }
    if (arrow) {
        let target_item = document.querySelector(`.grid-item[data-row='${row}'][data-column='${col}']`);
        if (target_item) {
            target_item.classList.add("selected");
            let target_img = target_item.querySelector('img');
            target_img.src = '/static/assets/images/start.jpg';
            start_item.classList.remove("selected");
            start_item.classList.add("deactivated");
            console.log("moved successfully");
        }
    }
}

window.addEventListener("keydown", handleKey);
