from flask import Flask, render_template
from tilePicker  import Tile

app = Flask(__name__)

file = open("./static/script/testinput.txt", "r")
file_input = file.readlines()
grid = []
for x in file_input:
    for s in x:
        if s == "\n" or s == " ":
            continue
        else:
            grid.append(int(s))
gameRow = grid[0]
gameCol = grid[1]
images = []
for s in grid[2:]:
    images.append(Tile(s))

@app.route("/")
def home():
    return render_template("index.html", images=images , gameRow=gameRow, gameCol=gameCol)


if __name__ == "__main__":
    app.run(debug=True)
