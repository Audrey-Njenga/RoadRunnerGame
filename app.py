from flask import Flask, render_template, redirect, url_for
from tilePicker import Tile

app = Flask(__name__)


@app.route("/")
def home():
    return redirect(url_for("levels", level=1))


@app.route("/level/<int:level>/")
def levels(level):
    grid = read_file()
    return render_template("index.html", gameGrid=grid, n=len(grid), m=len(grid[0]))


def read_file(filename="testinput.txt"):
    with open(f"./static/assets/input_files/{filename}", "r") as f:
        file_input = f.readlines()
        grid = []
        for row in file_input[1:]:
            temp = []
            # strip all white spaces and endline from row
            line = row.strip()
            for val in line:
                temp.append(val)
            grid.append(temp)
        return grid


if __name__ == "__main__":
    app.run(debug=True)
