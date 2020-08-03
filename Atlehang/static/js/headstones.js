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
    $('#starter-items').append('<div onclick="enlarge(this)"><img src="static/img/Start/starter'+  i +'.JPG"><div></div></div>');
    }
}



//adds in the images to html tags
function show_medium(){
    for(i = 1; i <= 26; i++){
    $('#medium-items').append('<div onclick="enlarge(this)"><img src="static/img/Medium/medium'+  i +'.JPG"><div></div></div>');
    }
}

function show_premium(){
    for(i = 1; i <= 26; i++){
    $('#premium-items').append('<div onclick="enlarge(this)"><img src="static/img/Premium/premium'+  i +'.JPG"><div></div></div>');
    }
}
//animates the headers
function animateHead(){
    $('#starter-content-div').css({'transform':'translate(0,0)'});
    $('#premium-content-div').css({'transform':'translate(0,0)'});

}

//controlling the image size
var tempElem = null;
var enlarge_enable = null;

function enlarge(elm){
    tempElem = elm;
    enlarge_enable = true;
    //reset_size();
    $('#back-btn').remove();
    $('.content-head').append('<button onclick="shinkSize()" id="back-btn">BACK</button>');
 
    var screen_width = window.innerWidth || document.documentElement.clientWidth;
    if(screen_width > 860){
        hideImg();
        $('.content-layout').css({'display':'flex','flex-direction':'column',
        'align-items':'center','justify-content':'center'});
        $(elm).css({'display':'flex','min-height':'600px','width':'60%'});
        $('.content-layout div img').css({'height':'590px','width':'100%'});
    
    }
    else{
        hideImg();
        $('.content-layout').css({'display':'flex','flex-direction':'column',
        'align-items':'center','justify-content':'center'});

        $(elm).css({'display':'flex','min-height':'80vh','width':'90%','box-shadow':' 0 3px 4px 0 #00528C'});
        $('.content-layout div img').css({'height':'78vh','width':'100%'});
    }
}
function shinkSize(){
    showImg();
}

function hideImg(){
    $('.content-layout div').css({'display':'none'});
}

function showImg(){
    var screen_width = window.innerWidth || document.documentElement.clientWidth;
    if(screen_width > 860){
    $('.content-layout').css({'display':'grid','align-items':'auto','justify-content':'auto'});
    $('.content-layout div').css({'display':'flex','height':'450px','min-width':'300px'});
    $(tempElem).css({'display':'flex','min-height':'450px','min-width':'300px','width':'90%'});
    $('.content-layout div img').css({'height':'430px','width':'100%'});
    }

    else{
        $(tempElem).css({'display':'flex','min-height':'min-content','width':'90%'});
        $('.content-layout').css({'display':'grid','align-items':'none','justify-content':'none'});
        $('.content-layout div').css({'display':'flex','height':'(min-content)','min-width':'10%'});
        $('.content-layout div img').css({'height':'240px','width':'100%'});
    }
    $('#back-btn').remove();
    $('.content-head').append('<button onclick="back_gallery()" id="back-btn">BACK</button>');
 
}

window.addEventListener('resize',function(){
    SCREEN_WIDTH = window.innerWidth || document.documentElement.clientWidth;
    SCREEN_HEIGHT = window.innerHeight || document.documentElement.clientHeight;
    if(enlarge_enable == true){
        enlarge(tempElem);
    }
});

/*

#content-layout div{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    min-height: 450px;
    min-width: 300px;   
    margin:5%;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.4);
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.4);
    background:#00528C;

}
/*
//growing the image
//hide all divs
//edit content-layout first
//eidt content-layout-div
//adjust the img appropritely

reversing everything
*/
