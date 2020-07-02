from flask import Flask, render_template

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

@app.route("/")
def home():
    return render_template("index.html", gameGrid=grid, gameRow=gameRow, gameCol=gameCol)


if __name__ == "__main__":
    app.run(debug=True)
