/*  $(document).ready(function(){
    for (var i = 0; i<arr.length; i++) {
        arr[i].addClass('animated fadeOutDown');
    }

});

var arr = [
    $('.socialBlock_1'),
    $('.socialBlock_2'),
    $('.socialBlock_3'),
    $('.socialBlock_4'),
];

function showBlock (i) {
    var socialBlock = arr[i];
    socialBlock.show().removeClass('animated fadeOutDown').addClass('animated fadeInUp').css('visibility','visible')
}
function hideBlock (i){
    var socialBlock = arr[i];
    socialBlock.removeClass('animated fadeInUp').addClass('animated fadeOutDown');
}


var linc2 = $('.socialBlock_1'),
    timeoutId;
$('.aboutUsImg').hover(function(){
    clearTimeout(timeoutId);
    linc2.show();
}, function(){
    timeoutId = setTimeout($.proxy(linc2,'hide'), 1000)
});
linc2.mouseenter(function(){
    clearTimeout(timeoutId); 
}).mouseleave(function(){
    linc2.hide();
}); 
 */

var coord = 0;
var block = $('.aboutUsSlider');


function testLeft(){
    coord = coord + 320;
    block.css('left',+coord+'px');
}
function testRight(){
    coord = coord - 320;
    block.css('left',+coord+'px');
}

