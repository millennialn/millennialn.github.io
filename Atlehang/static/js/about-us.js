
function aboutSetHeight(){
    var screen_height = window.innerHeight || document.documentElement.clientHeight;
    $('.about-us').css({'min-height':0.95*screen_height});
}
//adding the event listeners.


window.addEventListener('resize',function(){
    aboutSetHeight();
});
//ready document function
$(document).ready(
function(){   
    animationDiv();
    aboutSetHeight();
});

//animation nyana
function animationDiv(){
    $('#title-div').css({'transform':'translate(0,0)'});
    $('#details-div').css({'transform':'translate(0,0)'});
}
