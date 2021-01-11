// Make the info box slide in
$('h1').hover(function() {
    $('#info_box').css('display','inline');
    $('#info_box').animate({left: '30%'})
},)
// Make the info box slide out
$('#close_button').click(function() {
    $('#info_box').animate({left: '-50%'})
})