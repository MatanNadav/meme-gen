'use strict'


function onInitMain() {
    let imgs = createImages();
    createImgContainer(imgs.length)
    renderImage(imgs)

    console.log(imgs);
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
        imgBox[idx].innerHTML = `<a href="generator.html" onclick="onImgClick(${img.id})"><img class="images img-${img.id}" id="${img.id}" src="${img.imgUrl}" 
        alt=""></a>`
        idx++;
    });
}


function onSearchMeme(inputVal) {
    var searchedImgs = getSearchedMemes(inputVal);
    if(searchedImgs[0]) clearGrid()
    createImgContainer(searchedImgs.length)
    renderImage(searchedImgs);
    console.log(searchedImgs);
    

}

function renderSearchedImgs(imgs) {

}

function clearGrid(img) {
    let imgBox = document.querySelectorAll('.box');
    imgBox.forEach(box => {
        box.classList.remove('box')
        box.style.display = 'none';
    })
}

function onImgClick(imgId) {
    let imgObj = getImgById(imgId);
    saveImage('meme', imgObj);    
    
    // onInitGenerator();
}

function onDisplayInfo(elBox) {
   var elP =  elBox.querySelector('p');
    
}