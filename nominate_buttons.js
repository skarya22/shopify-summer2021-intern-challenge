function nominate(num) {
    if(!allDone) {
        $('#button_' + num).css("background-color", "gray")
        hidePlot();
        $('#nominations').animate({bottom: '0'});
        isOnList = false;
        data = array_of_data[num];
        text = data.Title + " (" + data.Year + ")";
        for (i = 0; i < 5; i++) {
            if (array_of_captions[i].text() === text) {
                isOnList = true;
            }
        }
        if (!isOnList) {
            setPoster(data.Poster, text);
            checkIfAllDone();
        }
    }
}
//this function checks if 5 movies have been nominated
function checkIfAllDone() {
    allDone = true;
    for(i = 0; i < 5; i++) {
        if (array_of_captions[i].text() === 'NominationEmpty') {
            allDone = false;
            break;
        }
    }
    if (allDone) doneBannerOn(); 
}
//this function sets the posters in the nomination bar
function setPoster(URL, text) {
    for (i = 0; i < 5; i++) {
        if (array_of_captions[i].text() === 'NominationEmpty') {
            if (URL === 'N/A') {
                array_of_nominations[i].attr('src', 'images/no_poster.jpg')
            } else {
                array_of_nominations[i].attr("src", URL);
            }
            array_of_captions[i].html(text);
            break;
        }
    }
}