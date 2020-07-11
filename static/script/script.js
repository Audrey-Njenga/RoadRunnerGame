const keys = {
    left: 37,
    up: 38,
    right: 39,
    down: 40
};

let selected_item_info = () => {
    let start_item = document.querySelector(".grid-item.selected"),
        row = start_item.getAttribute("data-row"),
        col = start_item.getAttribute("data-column");
    return [start_item, row, col];
}

let get_points = (target_item) => {
    return target_item.getAttribute("data-points")
}

let get_score = () => {
    return document.getElementById("score")
}

let get_level = () => {
    return document.getElementById("level")
}

let moveTo = (item) => {
    item.classList.add("selected");
}

let moveFrom = (item) => {
    item.classList.replace("selected", "deactivated");
}

let isValid = (item, points) => {
    let isDeactivated = item.classList.contains("deactivated"),
        isUnpassable = points === 'Unpassable';
    return !(isDeactivated || isUnpassable);
}


let update_score = (item, points) => {
    let score = get_score(),
        current_score = Number.parseInt(score.innerHTML),
        points_gained = Number.parseInt(points);
    if (!points_gained) points_gained = 0;
    score.textContent = current_score + points_gained + "";
    return score.textContent;
}

let moved_successfully = () => {
    console.log("moved successfully");
}

let move = (start_item, row, col) => {
    let target_item = document.querySelector(`.grid-item[data-row='${row}'][data-column='${col}']`);
    if (!target_item) return;

    // get data-points of the item
    let points = get_points(target_item);

    // validate movement
    if (!isValid(target_item, points)) {
        alert("Invalid Move, you can't pass through the wall or any deactivated tile!");
        return;
    }

    // move to target
    moveFrom(start_item);
    moveTo(target_item);

    // update score
    update_score(target_item, points);

    moved_successfully();
}

function handleKey(e) {
    let [start_item, row, col] = selected_item_info(),
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

// detect arrow key click to move player
window.addEventListener("keydown", handleKey);

// let next_level = () => {
//     let current_level = get_level();
//
//     fetch ('/level', {
//         method: "POST",
//         body: JSON.stringify({
//             current_level: current_level
//         })
//         headers
//     })
//
// }

let reach_goal = () => {
    let [current_element] = selected_item_info(),
        points = get_points(current_element),
        score = get_score();

    if (points === "Goal"){
        alert(`Congratulations! Final Score = ${score.textContent}`);
    }

    // upgrade the player to the next level
    return next_level()
}

function handleKeyUp(e) {
    let keyCode = e.keyCode
    if (keyCode === keys.left || keyCode === keys.up || keyCode === keys.right || keyCode === keys.down){
        // detect current element, if 'Goal' advance player to the next level.
        return reach_goal();
    }
}


// detect any arrow key up.
window.addEventListener("keyup", handleKeyUp);

