$(document).ready(function(){
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
    clearTimeout(timeoutId);
    var socialBlock = arr[i];
    socialBlock.show().removeClass('animated fadeOutDown').css('visibility','visible').addClass('animated fadeInUp'),
    function () {
        
    };
}
function hideBlock (i){
    var socialBlock = arr[i];
    socialBlock.removeClass('animated fadeInUp').addClass('animated fadeOutDown');
}
//*********************************** */

$(document).ready(function() {
 
    var socialBlock = $('.socialBlock_1'),
    timeoutId;
$('.aboutUsImg').hover(function(){
    clearTimeout(timeoutId);
    socialBlock.show().addClass('animated fadeInUp');
}, function(){
    timeoutId = setTimeout($.proxy(socialBlock,'hide'), 300)
});
socialBlock.mouseenter(function(){
    clearTimeout(timeoutId); 
}).mouseleave(function(){
    socialBlock.hide();
}); 

})