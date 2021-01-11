function search(String, page) {
    currentPage = page;
    currentString = String;
    $('#prev_button').css('display','inline');
    $('#next_button').css('display','inline');
    if (page > 1) {
        $('#prev_button').css('background-color','')
    } else {
        $('#prev_button').css('background-color', 'gray');
    }
    $('input').animate({'margin-top': '0.5%'})
    hidePlot();
    $('#buttons button').hide();
    $.get("https://www.omdbapi.com/?apikey=950b4470&s=" + String + "&type=movie&page=" + page, function(data) {
        if (data.Response === "False") {
            $('buttons button').css('display', 'none');
            $('#list').html('<br>No Results');
            $('#next_button').hide();
            return false;
        } 
        array_of_data = [];
        for (i = 0; i < 10 && i < parseInt(data.totalResults) - 10*(page - 1); i++) {
            movie = data.Search[i].Title + " (" + data.Search[i].Year +  ")";
            $('#button_' + i).html(movie);
            id = data.Search[i].imdbID
            $('#button_' + i).attr('onclick', 'nominate("' + i + '")');
            $('#button_' + i).show();
            $('#button_' + i).css('display', 'inline');
            addData(id, i, array_of_data);
        }
        for (i = 0; i < parseInt(data.totalResults) + 1 - 10*(page - 1); i++) {
            for (k = 0; k < array_of_captions.length; k++) {
                if ($('#button_' + i).text() === array_of_captions[k].text()) {
                    $('#button_' + i).css('background-color', 'gray');
                    break;
                } else {
                    $('#button_' + i).css('background-color', '');
                }
            }
        }
        if ((parseInt(data.totalResults)) - 10*(page) > 0) {
            $('#next_button').css('background-color', '');
        } else {
            $('#next_button').css('background-color', 'gray');
        }
    });
    $('#list').html('Hover over a movie name to see more information,<br>click on a movie title to nominate it.')
    return false; 
}

$('#next_button').click(function() {
    if ($(this).css('background-color') != 'rgb(128, 128, 128)') {
        search(currentString, currentPage + 1)
    }
    
})

$('#prev_button').click(function() {
    if ($(this).css('background-color') != 'rgb(128, 128, 128)') {
        search(currentString, currentPage - 1)
    }
})
//helper function that adds each movie's dataset to array_of_data
function addData(id, i, array) {
    $.get("https://www.omdbapi.com/?apikey=950b4470&i=" + id, function(data) {
        array[i] = data;
    });
}