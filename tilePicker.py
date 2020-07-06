def Tile(number):
    if number == 0:
        tile = "./assets/images/blank.jpg"
    elif number == 1:
        tile = "./assets/images/boulder.jpg"
    elif number == 2:
        tile = "./assets/images/pothole.jpg"
    elif  number == 3:
        tile = "./assets/images/explosive.jpg"
    elif number == 4:
        tile = "./assets/images/coyote.jpg"
    elif number == 5:
        tile = "./assets/images/tarred.jpg"
    elif number == 6:
        tile = "./assets/images/gold.jpg"
    elif number == 8:
        tile = "./assets/images/start.jpg"
    elif number == 9:
        tile = "./assets/images/goal.jpg"
    return tile
