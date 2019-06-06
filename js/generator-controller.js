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
    let img = getImg();
    console.log(img);
}

function imgOnCanvas() {
    let img = getImg();
    gCtx.drawImage(img);
}
