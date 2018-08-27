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




