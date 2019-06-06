'use strict';

let gCanvas;
let gCtx;

function onInit() {
    console.log('OK');
    gCanvas = document.getElementById('canvas');
    gCtx = gCanvas.getContext('2d');
}

function onImg() {
    console.log(document.querySelector('.img'));
}

function imgOnCanvas() {
    let img = getImg();
    gCtx.drawImage(img);
}
