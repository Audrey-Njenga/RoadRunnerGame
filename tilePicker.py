def Tile(number):
    if number == "0":
        tile = "blank.jpg"
    elif number == "1":
        tile = "boulder.jpg"
    elif number == "2":
        tile = "pothole.jpg"
    elif  number == "3":
        tile = "explosive.jpg"
    elif number == "4":
        tile = "coyote.jpg"
    elif number == "5":
        tile = "tarred.jpg"
    elif number == "6":
        tile = "gold.jpg"
    elif number == "8":
        tile = "start.jpg"
    elif number == "9":
        tile = "goal.jpg"
    return tile