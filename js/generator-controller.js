'use strict';

let canvas;
let ctx;
let gPos = { x: 0, y: 0 }
let gImg = new Image();

function onInitGenerator() {
    canvas = document.querySelector('.meme-canvas')
    ctx = canvas.getContext('2d');
    drawImgOnCanvas();
}

function drawImgOnCanvas() {
    let imgFromStorage = getImage('meme');
    gImg.src = imgFromStorage.imgUrl;
    gImg.onload = function () {
        ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
    }
}

function drawTextOnCanvas(ev) {
    let text = document.querySelector('.text').value;
    ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
    if (text === '') gPos.x = canvas.width / 2;
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.font = '30px impact';
    ctx.strokeText(text, gPos.x, 50);
    ctx.fillText(text, gPos.x, 50);
    if (ev.code === 'Backspace' && text !== '') {
        gPos.x += 7;
    } else {
        gPos.x -= 7;
    }
}