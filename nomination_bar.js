//this function removes movies from nominations
$('.img_row img').click(function() {
    if (allDone) doneBannerOff();
    for (i = 0; i < array_of_data.length; i++) {
        if ($('#button_' + i).text() == array_of_captions[$(this).attr('id').charAt(4) - 1].text()) {
            $('#button_' + i).css('background-color', '');
            break;
        }
    }
    array_of_captions[$(this).attr('id').charAt(4) - 1].html("Nomination<br>Empty");
    $(this).attr('src', 'images/nomination_empty.jpg');
    $(this).css('filter','')
    allDone = false;
    hidePlot();
})

//this function makes the nominated posters highlight red
$('.img_row img').hover(function() {
    if($(this).attr('src') !== 'images/nomination_empty.jpg') {
        $(this).css('transition', '0.5s');
        $(this).css('filter', 'drop-shadow(0 0 20px red)')
    } 
},function() {
    $(this).css('transition', '0.5s');
    $(this).css('filter', 'grayscale(0)');
    $(this).css('transition', '2.5s');
})

//makes all the CSS changes necessary to show that the user is done nominating five movies
function doneBannerOn() {
    hidePlot();
    $('#nominations').css('bottom', '10%');
    $('#nominations').css('background-color', '#EEC200');
    if (parseInt($('#topBar').css('width')) > 1000) $('#nominations').css('left','10%').css('right','10%');
    $('#nominations').css('border-radius', '5%');
    $('#nominations').css('z-index', '51');
    $('.img_row img').css('width', '100%');
    $('.img_row').css('padding-right', '1%').css('padding-left', '1%');
    $('th').html('Your five nominations are:');
    $('th').css('font-size', '2em');
    $('table p').css('font-weight', 'bold')
}

//undoes all the changes above
function doneBannerOff() {
    $('#plot_box').hide();
    $('#nominations').css('bottom', '0');
    $('#nominations').css('background-color', '#FCEBDB');
    if (parseInt($('#topBar').css('width')) > 1000) $('#nominations').css('left','20%').css('right','20%');
    $('#nominations').css('border-radius', '1.5%');
    $('#nominations').css('z-index', '49');
    $('.img_row img').css('padding', '0', '0')
    $('.img_row img').css('width', '75%');
    $('th').html('Please finish your nominations again:');
    $('th').css('font-size', '1em');
    $('table p').css('font-weight', 'normal')
}