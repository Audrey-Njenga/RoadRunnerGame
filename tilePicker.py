def Tile(number):
    if number == 0:
        tile = "{{ url_for('static', filename='assets/images/blank.jpg') }}"
    elif number == 1:
        tile = "{{ url_for('static', filename='assets/images/boulder.jpg') }}"
    elif number == 2:
        tile = "{{ url_for('static', filename='assets/images/pothole.jpg') }}"
    elif  number == 3:
        tile = "{{ url_for('static', filename='assets/images/explosive.jpg') }}"
    elif number == 4:
        tile = "{{ url_for('static', filename='assets/images/coyote.jpg') }}"
    elif number == 5:
        tile = "{{ url_for('static', filename='assets/images/tarred.jpg') }}"
    elif number == 6:
        tile = "{{ url_for('static', filename='assets/images/gold.jpg') }}"
    elif number == 8:
        tile = "{{ url_for('static', filename='assets/images/dtart.jpg') }}"
    elif number == 9:
        tile = "{{ url_for('static', filename='assets/images/goal.jpg') }}"
    return tile
