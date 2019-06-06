'use strict';

let canvas;
let ctx;
let gPos = { x: 0, y: 0 }

function onInitGenerator() {
    canvas = document.querySelector('.meme-canvas')
    ctx = canvas.getContext('2d');
    drawImgOnCanvas();
}

function drawImgOnCanvas() {
    let imgFromStorage = getImage('meme');
    let img = new Image();
    img.src = imgFromStorage.imgUrl;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
}

function drawTextOnCanvas(ev) {
    let text = document.querySelector('.text').value;
    if (text === '') gPos.x = canvas.width / 2;
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.font = '30px impact';
    if (ev.code === 'Backspace' && text !== '') {
        gPos.x += 7;
        drawImgOnCanvas();
    } else {
        gPos.x -= 7;
    }
    ctx.strokeText(text, gPos.x, 50);
    ctx.fillText(text, gPos.x, 50);
    // drawImgOnCanvas()
}