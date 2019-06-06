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
        grid.innerHTML +=  `<div class = "box" onmousemove="onDisplayInfo(this)"></div>`
    }
}
function renderImage(imgs) {
    var idx = 0;
    imgs.forEach(img => {
        var imgBox = document.querySelectorAll('.box');
        var keywords = img.keywords.join(',')
        imgBox[idx].innerHTML = `<p class="meme-info">${keywords}</p> <img class="images img-${img.id}" id="${img.id}" src="${img.imgUrl}" alt="" onclick="onImgClick(this)">`
        idx++;
    });
}

function onImgClick(elImg) {
    var img = getImgById(+elImg.id);
    drawImgOnCanvas(img);
    console.log(img);

}

function onDisplayInfo(elBox) {
   var elP =  elBox.querySelector('p');
    // console.log(elP);
    
}