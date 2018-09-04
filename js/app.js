

 //Рабочий код
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


				
$(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });