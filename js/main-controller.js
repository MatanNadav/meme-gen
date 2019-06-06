'use strict'

function onInitMain() {
    var imgs = createImages();
    // renderImage(imgs)
    
   
    console.log(imgs);

}

function renderImage(imgs) {
    var idx = 0
    imgs.forEach( img =>  {
        var imgBox = document.querySelectorAll('.images');
        imgBox[idx] = `<img class="images img-1" src="${imgs[idx].url}" alt="">`
    } ) 
}