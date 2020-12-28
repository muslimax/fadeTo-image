let images = $('img')
var i = 0;

function showImg() {
    setTimeout(function () {
        $(`#img${i + 1}`).fadeIn(500);
        i++;
        if (i <= images.length) {
            showImg()
        } else if (i > images.length) {
            $(`#img${images.length}`).fadeOut(500);
            images.length--;
            showImg()
        }
    }, 500);
}
showImg()