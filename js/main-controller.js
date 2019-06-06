'use strict'

function onInitMain() {
    let imgs = createImages();
    createImgContainer(imgs.length)
    renderImage(imgs)
}

function createImgContainer(size) {
    let grid = document.querySelector('.grid-container');
    for (let i = 0; i < size; i++) {
        grid.innerHTML +=  `<div class = "box hvr-grow-shadow" onmousemove="onDisplayInfo(this)"></div>`
    }
}

function renderImage(imgs) {
    let idx = 0;
    imgs.forEach(img => {
        let imgBox = document.querySelectorAll('.box');
        let keywords = img.keywords.join(',')
        imgBox[idx].innerHTML = `<a href="generator.html" onclick="onImgClick(${img.id})"><p class="meme-info">${keywords}</p> <img class="images img-${img.id}" id="${img.id}" src="${img.imgUrl}" 
        alt=""></a>`
        idx++;
    });
}

function onImgClick(imgId) {
    let imgObj = getImgById(imgId);
    saveImage('meme', imgObj);
}

function onDisplayInfo(elBox) {
   var elP =  elBox.querySelector('p');
    
}