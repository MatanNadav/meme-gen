'use strict';

let gCanvas;
let gCtx;

function onInit() {
    console.log('OK');
    gCanvas = document.getElementById('canvas');
    gCtx = canvas.getContext('2d');
    onImg();
}

function onImg() {
    console.log(document.querySelector('.img'));
}

function imgOnCanvas() {
    let img = getImg();
    gCtx.drawImage(img);
}
