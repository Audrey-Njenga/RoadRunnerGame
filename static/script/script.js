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

let moveTo = (item) => {
    item.classList.add("selected");
}

let moveFrom = (item) => {
    item.classList.replace("selected", "deactivated");
}

let isInvalid = (item, points) => {
    let isDeactivated = item.classList.contains("deactivated"),
        isUnpassable = points === 'Unpassable';
    return isDeactivated || isUnpassable;
}

let update_score = (item, points) => {
    let current_score = Number.parseInt(document.getElementById("score").innerHTML),
        points_gained = Number.parseInt(points);
    if (points_gained){
        document.getElementById("score").innerHTML = current_score + points_gained + "";
        return true;
    }
    return false;
}

let move = (start_item, row, col) => {
    let target_item = document.querySelector(`.grid-item[data-row='${row}'][data-column='${col}']`);
    if (target_item) {
        // get data-points of the item
        let points = target_item.getAttribute("data-points");
        // validate movement
        if (isInvalid(target_item, points)) {
            alert("Invalid Move, you can't pass through the wall or any deactivated tile!");
            return;
        }
        // calculate score
        let isScoreUpdate = update_score(target_item, points);
        if (!isScoreUpdate){
            alert("Unvalid Move");
            return;
        }
        // move user to target
        moveFrom(start_item);
        moveTo(target_item);
        console.log("moved successfully");
    } else {
        console.log("Invalid move!")
    }
}


window.addEventListener("keydown", handleKey);
