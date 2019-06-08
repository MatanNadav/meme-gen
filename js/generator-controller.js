'use strict';

let canvas;
let ctx;
let gPos = { x: 0, y: 0 };
let gImg = new Image();

function onInitGenerator() {
    canvas = document.querySelector('.meme-canvas')
    ctx = canvas.getContext('2d');
    drawImgOnCanvas();
}

function drawImgOnCanvas() {
    let imgFromStorage = getValue('meme');
    gImg.src = imgFromStorage.imgUrl;
    gImg.onload = function () {
        canvas.width = gImg.naturalWidth;
        canvas.height = gImg.naturalHeight;
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.textAlign = 'center';
        ctx.font = '40px impact';
        gPos.x = gImg.naturalWidth / 2;
        gPos.y = 100;
        ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
    }
}

function drawTextOnCanvas() {
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
    let text = document.querySelector('.text').value;
    ctx.strokeText(text, gPos.x, gPos.y);
    ctx.fillText(text, gPos.x, gPos.y);
}

function textAlign(alignText) {
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
    let text = document.querySelector('.text').value;
    if (alignText === 'left') {
        gPos.x = 10;
    } else if (alignText === 'center') {
        gPos.x = gImg.naturalWidth / 2;
    } else {
        gPos.x = gImg.naturalWidth - 40;
    }
    ctx.textAlign = alignText;
    ctx.strokeText(text, gPos.x, gPos.y);
    ctx.fillText(text, gPos.x, gPos.y);
}

function fontSize(fontSize) {
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
    let text = document.querySelector('.text').value;
    if (fontSize === 'increese-font-size') {
        ctx.font = ctx.font.replace(/\d+px/, (parseInt(ctx.font.match(/\d+px/)) + 2) + 'px');
    } else {
        ctx.font = ctx.font.replace(/\d+px/, (parseInt(ctx.font.match(/\d+px/)) - 2) + 'px');
    }
    ctx.strokeText(text, gPos.x, gPos.y);
    ctx.fillText(text, gPos.x, gPos.y);
}

function changeColor(color) {
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
    ctx.fillStyle = color;
    let text = document.querySelector('.text').value;
    ctx.strokeText(text, gPos.x, gPos.y);
    ctx.fillText(text, gPos.x, gPos.y);
}