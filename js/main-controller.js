'use strict'

function onInitMain() {
    var imgs = createImages();
    renderImage(imgs)
    
   
    console.log(imgs);

}

function renderImage(imgs) {
    var idx = 0;
    imgs.forEach( img =>  {
        var imgBox = document.querySelectorAll('.box');
        imgBox[idx].innerHTML = `<img class="images img-${img.id}" id="${img.id}" src="${img.imgUrl}" alt="" onclick="onImgClick(this)">`
        idx++;
    } );
}

function onImgClick(elImg) {
    debugger
    var img = getImgById(+elImg.id);
    console.log(img);
    
}