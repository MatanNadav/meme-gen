'use strict'

function onInit() {
    var imgs = createImages();
    renderImage(imgs)
    
   
    console.log(imgs);

}

function renderImage(imgs) {
    var idx = 0;
    imgs.forEach( img =>  {
        var imgBox = document.querySelectorAll('.box');
        imgBox[idx].innerHTML = `<img class="images img-${img.id}" src="${img.imgUrl}" alt="">`
        idx++;
    } );
}