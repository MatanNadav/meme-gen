'use strict';

let canvas;
let ctx;
let gPos = { x: 0, y: 0 }
let gSrcImg;

function onInitGenerator() {
    console.log('OK');
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    drawImgOnCanvas();
}

function onImgId(imgId) {
    // let img = new Image();
    // gSrcImg = getImgById(imgId);
    // img.src = gSrcImg.imgUrl;
    // img.onload = function () {
    //     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    // }
    // drawImgOnCanvas(imgId);
}

function drawImgOnCanvas(imgId) {
    let img = new Image();
    img.src = 'imgs/5.jpg';
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
}

function drawTextOnCanvas(ev) {
    let text = document.querySelector('.text').value;
    drawImgOnCanvas()
    if (text === '') gPos.x = canvas.width / 2;
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.font = '30px impact';
    ctx.strokeText(text, gPos.x, 100);
    ctx.fillText(text, gPos.x, 100);
    if (ev.code === 'Backspace' && text !== '') {
        gPos.x += 7;
    } else {
        gPos.x -= 7;
    }
}