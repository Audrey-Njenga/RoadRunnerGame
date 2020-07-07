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
    tiles = [["blank.jpg", -1], ["boulder.jpg", 0], ["pothole.jpg", -2], ["explosive.jpg", -4], ["coyote.jpg", -8],
             ["tarred.jpg", 1], ["gold.jpg", 5], [None, None], ["start.jpg", 0], ["goal.jpg", 0]]
    return tiles[number]

