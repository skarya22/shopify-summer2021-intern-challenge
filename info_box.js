// Make the info box slide in
$('#i_button').hover(function() {
    $('#info_box').css('display','inline');
    $('#info_box').animate({left: '30%'})
},)
// Make the info box slide out
$('#close_button').click(function() {
    $('#info_box').animate({left: '-50%'})
})