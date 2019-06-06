'use strict';

let gCanvas;
let gCtx;

function onInitGenerator() {
    console.log('OK');
    gCanvas = document.getElementById('canvas');
    gCtx = gCanvas.getContext('2d');
    drawImgOnCanvas();
}

function drawImgOnCanvas() {
    let img = document.querySelector('.img');
    console.log('Height: ',img.clientHeight,'Width:',img.clientWidth);
    gCanvas.width = img.clientWidth;
    gCanvas.height = img.clientHeight;
    gCtx.drawImage(img);
}

function imgOnCanvas() {
    let img = getImg();
    gCtx.drawImage(img);
}
