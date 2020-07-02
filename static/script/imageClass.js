function tilePicker(number) {
    const tile;
    switch (number) {
        case 0:
            tile = "./assets/images/blank.jpg";
        case 1:
            tile = "./assets/images/boulder.jpg";
            break;
        case 2:
            tile = "./assets/images/pothole.jpg";
            break;
        case 3:
            tile = "./assets/images/explosive.jpg";
            break;
        case 4:
            tile = "./assets/images/coyote.jpg";
            break;
        case 5:
            tile = "./assets/images/tarred.jpg";
            break;
        case 6:
            tile = "./assets/images/gold.jpg";
            break;
        case 8:
            tile = "./assets/images/start.jpg";
            break;
        case 9:
            tile = "./assets/images/goal.jpg";
            break;

    }
    return "<img src="+tile+">";
}