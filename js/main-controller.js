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
    let idx = 0;
    imgs.forEach(img => {
        let imgBox = document.querySelectorAll('.box');
        let keywords = img.keywords.join(',')
        imgBox[idx].innerHTML = `<p class="meme-info">${keywords}</p> <img class="images img-${img.id}" id="${img.id}" src="${img.imgUrl}" 
        alt="" onclick="onImgClick(${img.id})">`
        idx++;
    });
}

function onImgClick(id) {
    let img = getImgById(id)
    drawImgOnCanvas(img);
    // console.log(img.imgUrl);
    // window.location = 'generator.html';
    // console.log(img);

}

function onDisplayInfo(elBox) {
   var elP =  elBox.querySelector('p');
    // console.log(elP);
    
}