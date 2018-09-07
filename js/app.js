var coord = 0;
var block = $('.aboutUsSlider');


function testLeft() {
    if (coord <= 0) {
        coord += 320;
    } else {
        coord = -320;
    }
    block.css('left', +coord + 'px');
}

function testRight() {
    if (coord >= -0) {
        coord -= 320;
    } else {
        coord = 320;
    }

    block.css('left', +coord + 'px');

}
