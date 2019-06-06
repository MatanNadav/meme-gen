'use strict'

function onInitMain() {
    var imgs = createImages();
    createImgContainer(imgs.length)
    renderImage(imgs)


    console.log(imgs);

}

function createImgContainer(size) {
    var grid = document.querySelector('.grid-container');
    for (var i = 0; i < size; i++) {
        grid.innerHTML +=  `<div onmousemove="onDisplayInfo()"><p class="meme-info"></p></div>`
    }
}
function renderImage(imgs) {
    var idx = 0;
    imgs.forEach(img => {
        var imgBox = document.querySelectorAll('.box');
        imgBox[idx].innerHTML = `<img class="images img-${img.id}" id="${img.id}" src="${img.imgUrl}" alt="" onclick="onImgClick(this)">`
        idx++;
    });
}

function onImgClick(elImg) {
    var img = getImgById(+elImg.id);
    drawImgOnCanvas(img);
    console.log(img);

}

function onDisplayInfo() {
    console.log('hovering....');
    
}