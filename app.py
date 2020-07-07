from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)


@app.route("/")
def home():
    return redirect(url_for("levels", level=1))


@app.route("/level/<int:level>/")
def levels(level):
    tiles = {
        "0": ["blank.jpg", -1],
        "1": ["boulder.jpg", "Unpassable"],
        "2": ["pothole.jpg", -2],
        "3": ["explosive.jpg", -4],
        "4": ["coyote.jpg", -8],
        "5": ["tarred.jpg", 1],
        "6": ["gold.jpg", 5],
        "8": ["start.jpg", "Start"],
        "9": ["goal.jpg", 0]
    }
    grid = read_file()
    return render_template("index.html", gameGrid=grid, n=len(grid), m=len(grid[0]), tiles=tiles)


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
