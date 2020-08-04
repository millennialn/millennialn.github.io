$(document).ready(function(){
    setContactUsHeight();
    setRequestHeight();
    animateDiv();
});

function setContactUsHeight(){
    var screen_height = window.innerHeight || document.documentElement.clientHeight;
    $('.contact-us').css({'min-height':0.95*screen_height});

}
function setRequestHeight(){
    var screen_height = window.innerHeight || document.documentElement.clientHeight;
    $('.req-call').css({'height':0.70*screen_height});

}

function showForm(){
    document.getElementById('req-call').style.display = 'flex';
    freeze_screen();
    setFormHeight();
}
function hideForm(){
    document.getElementById('req-call').style.display = 'none';
    unfreeze_screen();
}



function setFormHeight(){
    var screen_height = window.innerHeight || document.documentElement.clientHeight;
    var screen_width = window.innderWidth || document.documentElement.clientWidth;
    if(screen_width < 800){
        $('req-call').css({'height':screen_height});
    }
}
function freeze_screen(){
    $('body').css({'overflow':'hidden'});
}


function unfreeze_screen(){
    $('body').css({'overflow':'auto'});
}
function redirect(){
    window.location.href = 'index.html';
}
//animating the contact us page
function animateDiv(){
    $('.title').css({'transform':'translate(0,0)'});
    $('.contact-info').css({'transform':'translate(0,0)'});
}
window.addEventListener('resize',function(){
    setContactUsHeight();
    setRequestHeight();
});