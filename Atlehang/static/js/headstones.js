var SCREEN_WIDTH = window.innerWidth || document.documentElement.clientWidth;
var SCREEN_HEIGHT = window.innerHeight || document.documentElement.clientHeight;

$(document).ready(
    function(){
  
        show_starter();
        show_medium();
        show_premium();
        animateHead();
    }
);
function starter_click(){
    $('#medium').css({'display':'none'});
    $('#premium').css({'display':'none'});
    starter_set_gallery();
}

function medium_click(){
    
    $('#starter').css({'display':'none'});
    $('#premium').css({'display':'none'});
    medium_set_gallery();
}

function premium_click(){
    
    $('#medium').css({'display':'none'});
    $('#starter').css({'display':'none'});
    premium_set_gallery();
}

//A rewrte version of this function

function back_gallery(){

    $("#starter-content").css({'display':'none'});
    $('#starter-content-div').css({'display':'grid'});

    $('#starter').css({'display':'block'});
    $('#medium').css({'display':'block'});
    $('#premium').css({'display':'block'});

    $('#medium-content-div').css({'display':'grid'});
    $("#medium-content").css({'display':'none'});

    $('#premium-content-div').css({'display':'grid'});
    $("#premium-content").css({'display':'none'});

}


function starter_set_gallery(){
    $('#starter-content-div').css({'display':'none'});
    $("#starter-content").css({'display':'flex'});
}

function medium_set_gallery(){
    $('#medium-content-div').css({'display':'none'});
    $("#medium-content").css({'display':'grid'});
}

function premium_set_gallery(){
    $('#premium-content-div').css({'display':'none'});
    $("#premium-content").css({'display':'grid'});
}

function show_starter(){
    for(i = 1; i <= 26; i++){
    $('.starter-items').append('<div><img src="static/img/Start/starter'+  i +'.JPG"><div></div></div>');
    }
}



//adds in the images to html tags
function show_medium(){
    for(i = 1; i <= 26; i++){
    $('.medium-items').append('<div><img src="static/img/Medium/medium'+  i +'.JPG"><div></div></div>');
    }
}

function show_premium(){
    for(i = 1; i <= 26; i++){
    $('.premium-items').append('<div><img src="static/img/Premium/premium'+  i +'.JPG"><div></div></div>');
    }
}
//animates the headers
function animateHead(){
    $('#starter-content-div').css({'transform':'translate(0,0)'});
    $('#premium-content-div').css({'transform':'translate(0,0)'});

}