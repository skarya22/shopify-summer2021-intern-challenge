//this listener brings the plotbox into view and highlights the buttons, if movie is not nominated
$('#buttons button').mouseenter(function() {
    if ($(this).css('background-color') != 'rgb(128, 128, 128)') {
        num = $(this).attr('id').substring(7,8);
        this_data = array_of_data[num];
        if (this_data === null || this_data.Poster === 'N/A' || this_data.Poster == null) {
            $('#hover_img').attr('src','images/no_poster.jpg');
        } else {
            $('#hover_img').attr('src',this_data.Poster);
        }
        $('#hover_img').on('load', function() {
            $('#movie_title').html(this_data.Title + " (" + this_data.Year + ")")
            $('#plot_p').html(this_data.Plot);
            $('#actors_p').html("Actors: " + this_data.Actors );
            if (this_data.Ratings[1] != null) {
                $('#rotten_p').html("Rotten Tomatoes: " + this_data.Ratings[1].Value);
            } else {
                $('#rotten_p').html('Rotten Tomatoes: N/A');
            }
            if (this_data.imdbRating != null) {
                $('#imdb_p').html('imdb Rating: ' + this_data.imdbRating);
            }
        })
        isOnLeft = plotOnLeft();
        if (isOnLeft && parseInt($('#plot_box').css('left')) < 0) {
            $('#plot_box').animate({left: '0%'});
        } else if (!isOnLeft && parseInt($('#plot_box').css('left')) > parseInt($('#topBar').css('left'))) {
            $('#plot_box').animate({left: '75%'});
        }
        $('#plot_box').show(); 
    }        
})
//this returns true if the plotbox is on the left
function plotOnLeft() {
    halfScreenWidth = parseInt($('#topBar').css('width'))/2;
    leftWidth = parseInt($('#plot_box').css('left').substring(0,$('#plot_box').css('left').length - 2))
    if (halfScreenWidth < leftWidth) {
        return false;
    } else {
        return true;
    }
}
//this moves plotbox to other sides
$('#plot_box').mouseenter(function() {
    if (allDone) {
        hidePlot();
        return;
    }
    if (plotOnLeft()) {
        $('#plot_box').animate({left:'72.5%'});
    } else {
        $('#plot_box').animate({left: '0%'});
    }
})
//this function hides the plotbox
function hidePlot() {
    if (plotOnLeft()) {
        $('#plot_box').animate({left: '-50%'});
    } else {
        $('#plot_box').animate({left: '150%'});
    }
}