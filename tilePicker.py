# class imageTile():
#     def __init__(self, link, points):
#         self.points = points
#         self.link = link

#     def link(self):
#         return self.link

#     def points(self):
#         return self.points

# blank = imageTile("blank.jpg", -1)
# boulder = imageTile("boulder.jpg", 0)
# pothole = imageTile("pothole.jpg", -2)
# explosive = imageTile("explosive.jpg", -4)
# coyote = imageTile("coyote.jpg", -8)
# tarred = imageTile("tarred.jpg", 1)
# gold = imageTile("gold.jpg", 5)
# start = imageTile("start.jpg", 0)
# goal = imageTile("goal.jpg", 0)


# def Tile(number):
#     if number == "0":
#         return blank
#     elif number == "1":
#         return boulder
#     elif number == "2":
#         return pothole
#     elif  number == "3":
#         return explosive
#     elif number == "4":
#         return coyote
#     elif number == "5":
#         return tarred
#     elif number == "6":
#         return gold
#     elif number == "8":
#         return start
#     elif number == "9":
#         return goal

def Tile(number):
    if number == "0":
        tile = "blank.jpg"
        points = -1
    elif number == "1":
        tile = "boulder.jpg"
        points = 0
    elif number == "2":
        tile = "pothole.jpg"
        points = -2
    elif  number == "3":
        tile = "explosive.jpg"
        points = -4
    elif number == "4":
        tile = "coyote.jpg"
        points = -8
    elif number == "5":
        tile = "tarred.jpg"
        points = 1
    elif number == "6":
        tile = "gold.jpg"
        points = 5
    elif number == "8":
        tile = "start.jpg"
        points = 0
    elif number == "9":
        tile = "goal.jpg"
        points = 0
    return tile, points
    