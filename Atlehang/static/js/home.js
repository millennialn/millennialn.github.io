var SCREEN_HEIGHT = window.innerHeight || document.documentElement.clientHeight;
var SCREEN_WIDTH = window.innerWidth || document.documentElement.clientWidth;
$(document).ready(
    function (){
        homeSetHeight();
        animateHome();
    }
);


window.addEventListener('resize',function(){
    scale_nav();
    homeSetHeight();
});

window.addEventListener('scroll',function (){
    scale_nav();
});


function isMobile(){
    if(SCREEN_WIDTH < 800){
        return true;
    }
    else{
        return false;
    }
}



function scale_nav(){
    var nav_scroll_height= document.querySelector('.nav').scrollHeight;
    var scroll_position = document.documentElement.scrollTop; 
    if(isMobile()){
        if(0.9*nav_scroll_height < scroll_position){
            $('#nav-btn-container').css({'position':'fixed',
            'top':'1rem'});
            $('#nav-btn').css({'background-color':'white'});
            
        }

        else{
            $('#nav-btn-container').css({'position':'absolute',
        'top':'3rem'});

        $('#nav-btn').css({'background-color':'#003459'});
        }
        
    }
    else{
        
        if(0.9*nav_scroll_height < scroll_position){
            $(".nav").css({'height':'4rem','position':'fixed','z-index':'2',
            'width':'100%',
            'background':'rgba(0,0,0,0)',"color":'white',
            'box-shadow':'none'
        });
            $('#LOGO').css({'height':'4rem'});
        }   
        else if(document.documentElement.scrollTop == 0){
            $(".nav").css({'height':'4rem','position':'relative','z-index':'1',
            'background':'white','color':'#003459',
            'box-shadow':'box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.4)'});
            $('#LOGO').css({'height':'4rem'});
        
        }
    }
}


function homeSetHeight(){
    var screen_Height = window.innerHeight || document.documentElement.clientHeight;
    var screen_width = window.innerWidth || document.documentElement.clientWidth;
        if(screen_width > 800){
        $('.home').css({'min-height':0.9*screen_Height});
        }
        else{
            $('.home').css({'min-height':0.9*screen_Height});
        }
}

function animateHome(){
    $('.abstract div').css({'transform':'translate(0,0)'});
    $('button').css({'transform':'transtate(0,0)'});
}