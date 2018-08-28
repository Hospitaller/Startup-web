

var arr = [
    $('.socialBlock_1'),
    $('.socialBlock_2'),
    $('.socialBlock_3'),
    $('.socialBlock_4'),
];

function showBlock (i) {
    var socialBlock = arr[i];
    socialBlock.show().removeClass('animated fadeOutDown').addClass('animated fadeInUp');
}
function hideBlock (i){
    var socialBlock = arr[i];
    socialBlock.removeClass('animated fadeInUp').addClass('animated fadeOutDown');
}
