// 1. show, hide, toggle
$('#show').click(function(){
    $('#img').show(500);   //3초
});
$('#hide').click(function(){
    $('#img').hide(500, 'swing');
});
$('#toggle').click(function(){
    $('#img').toggle(500);
});

// 2. fadeIn, fadeOut, fadeToggle
$('#fadeIn').click(function(){
    $('#img').fadeIn(500);
});
$('#fadeOut').click(function(){
    $('#img').fadeOut(500);
});
$('#fadeToggle').click(function(){
    $('#img').fadeToggle(500);
});

$('#img').hover(
    function(){
        $(this).fadeTo(1000,0.5);
    },
    function(){
        $(this).fadeTo(1000,1.5);
    },
)

// 3. slideDown, slideUp, slideToggle
// $('.menu').click(function(e){
//     const content = $(e.target).next();
//     if(content.css('display') === 'none') {
//         $(content).slideDown(500);
//     } else {
//         $(content).slideUp (500);
//     }
// });


// $('.menu').click(function(e){
//     const content = $(e.target).next();
//     content.slideToggle(500);
// });


$('.menu').click(function(e){
    const content = $(e.target).next();
    $('.contents').slideUp();
    content.slideDown(500);

    // const content = $(e.target).next();
    
    // if(content === content.next()){
    //     $(content.prev()).slideUp (500);
    // } else {
    //     $(content).slideDown(500);
    // }
});

