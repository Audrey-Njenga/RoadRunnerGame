const game = {
    score: document.getElementById("score")
};

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
            arrow = true;
            break;
        case keys.up:
            row = Number.parseInt(row) - 1;
            arrow = true;
            break;
        case keys.right:
            col = Number.parseInt(col) + 1;
            arrow = true;
            break;
        case keys.down:
            row = Number.parseInt(row) + 1;
            arrow = true;
            break;
    }
    if (arrow) {
        return move(start_item, row, col);
    }
}

let moveTo = (target_item) => {
    target_item.classList.add("Selected");
}

let moveFrom = (target_item) => {
    target_item.classList.add("deactivated");
    target_item.classList.remove("selected");
}

let move = (start_item, row, col) => {
    let target_item = document.querySelector(`.grid-item[data-row='${row}'][data-column='${col}']`);
    // Validate movement
    if (target_item) {
        moveTo(target_item);
        moveFrom(start_item);
        console.log("moved successfully");
    }
}


window.addEventListener("keydown", handleKey);
