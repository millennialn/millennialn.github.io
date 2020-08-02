$(document).ready(function ()
{
    var nav_center_pos = window.getComputedStyle(document.querySelector('.nav')).height || document.querySelector('.nav').height;
    var nav_height  = window.getComputedStyle(document.getElementById("nav-btn-container")).height || document.getElementById('nav-btn-container').style.height;
    $("#nav-btn-container").css({'top':0.5*parseInt(nav_center_pos,10)-0.25*parseInt(nav_height,10)});
});


document.getElementById('nav-btn-container').addEventListener('click',function(){
    control_scroll();
});


function control_scroll(){
    var check = document.getElementById('nav-btn-checkbox').checked;
    if(check == true){
        unfreeze();
    }
    else{
        freeze();
    }
}
function freeze(){
    $('body').css({'overflow':'hidden'});
    document.querySelector('.menu').scrollIntoView();    
}
function unfreeze(){
    $('body').css({'overflow':'auto'});

}
