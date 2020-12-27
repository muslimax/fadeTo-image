let images = $('img')
// console.log(images.length);
var i = 0;



while (i < images.length) {
    $(`#img${i + 1}`).fadeIn(1000);
    i++;
}

 
while (images.length > 0) {
    $(`#img${images.length}`).fadeOut(1000);
    images.length--;
}


// for (let i = 0; i < images.length; i++) {
//     $(`#img${i + 1}`).fadeIn(1000)
// }


// for (let i = 0; i < images.length; i++) {
//     $(`#img${i+1}`).fadeOut(1000)
//     console.log(i);
// }