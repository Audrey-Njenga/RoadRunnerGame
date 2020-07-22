from flask import Flask, render_template, redirect, url_for, abort, request

app = Flask(__name__)


@app.route("/")
def home():
    return redirect(url_for("render_level", curr_level=1))


@app.route("/levels/<int:curr_level>/")
def render_level(curr_level=1):
    levels = ["testinput.txt", "test_input_10_15_coyote_wall_da.txt", "test_input_10_15_golden_d.txt"]
    tiles = {
        "0": ["blank.jpg", -1],
        "1": ["boulder.jpg", "Unpassable"],
        "2": ["pothole.jpg", -2],
        "3": ["explosive.jpg", -4],
        "4": ["coyote.jpg", -8],
        "5": ["tarred.jpg", 1],
        "6": ["gold.jpg", 5],
        "8": ["start.jpg", "Start"],
        "9": ["goal.jpg", "Goal"]
    }
    if curr_level > len(levels) or curr_level < 1:
        abort(404)
    grid = read_file(levels[curr_level - 1])
    return render_template("index.html", gameGrid=grid, n=len(grid), m=len(grid[0]), tiles=tiles, curr_level=curr_level,
                           tot_levels=len(levels))


@app.route("/levels", methods=["POST"])
def change_level():
    new_level = request.form.get('current_level')
    if not new_level:
        abort(404)
    return redirect(url_for("render_level", curr_level=int(new_level)))


def read_file(filename="testinput.txt"):
    with open(f"./static/assets/input_files/{filename}", "r") as f:
        file_input = f.readlines()
        grid = []
        for row in file_input[1:]:
            temp = []
            # strip all white spaces and end line char
            line = row.strip()
            for val in line:
                temp.append(val)
            grid.append(temp)
        return grid


if __name__ == "__main__":
    app.run(debug=True)
