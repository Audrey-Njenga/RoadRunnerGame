// TODO:
// 1- Better scroing system (Aud)
// 4- Intro and congrats page (Aud)
// 5- Once done with all levels, then congrats ()
// 6- Game Over syst once the user can't move to any dire (Au + Ah)
// 

let app = {
    level_done: false
}


let isLevelDone= () => {
    return app.level_done;
}

let reachedGoal = () => {
    app.level_done = true;
}


// ------------------------------------------------------------------------------------------------------
// Move player on keydown
// ------------------------------------------------------------------------------------------------------

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
    return target_item.getAttribute("data-points");
}

let get_score = () => {
    let score = document.getElementById("score").textContent;
    return +score;
}

let get_current_level = () => {
    return +document.querySelector("button.selected_level > input").value;
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
    let curr_score = get_score(),
        points_gained = Number.parseInt(points);
    if (!points_gained) points_gained = 0;
    score.textContent = curr_score + points_gained + "";
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
    // move on key arrow and not level done
    if (arrow && !(isLevelDone())) {
        return move(start_item, row, col);
    }
}

// detect arrow key click to move player
window.addEventListener("keydown", handleKey);


// ------------------------------------------------------------------------------------------------------
//  Detect goal reached and level up
// ------------------------------------------------------------------------------------------------------

let level_up = () => {
    let curr_level = get_current_level(),
        next_level_btn = document.querySelector(`button[data-id='${curr_level + 1}']`);
    if (next_level_btn) {
        next_level_btn.click();
    } else {
        document.querySelector(`button[data-id='1']`).click();
    }
}

let reach_goal = () => {
    let [current_element] = selected_item_info(),
        points = get_points(current_element),
        score = get_score();

    if (points === "Goal") {
        reach_goal();
        alert(`Congratulations! Final Score = ${score}`);
        // upgrade the player to the next level
        return level_up()
    }
}

function handleKeyUp(e) {
    let keyCode = e.keyCode
    if (keyCode === keys.left || keyCode === keys.up || keyCode === keys.right || keyCode === keys.down) {
        // detect current element, if 'Goal' advance player to the next level.
        return reach_goal();
    }
}


// detect any arrow key up.
window.addEventListener("keyup", handleKeyUp);

