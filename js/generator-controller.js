'use strict';

let canvas;
let ctx;

function onInit() {
    console.log('OK');
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    // onImg();
}

function onImg() {
    console.log(document.querySelector('.img'));
}

function imgOnCanvas() {
    let img = getImg();
    gCtx.drawImage(img);
}
