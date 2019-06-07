'use strict';

let canvas;
let ctx;
let gPos = { x: 0, y: 0 };
let gImg = new Image();

function onInitGenerator() {
    canvas = document.querySelector('.meme-canvas')
    ctx = canvas.getContext('2d');
    ctx.textAlign = 'center'
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.font = '40px impact';
    drawImgOnCanvas();
    gPos.x = canvas.width / 2;
    gPos.y = 100;
}

function drawImgOnCanvas() {
    let imgFromStorage = getImage('meme');
    gImg.src = imgFromStorage.imgUrl;
    gImg.onload = function () {
        ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
    }
}

function drawTextOnCanvas() {
    let text = document.querySelector('.text').value;
    ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
    ctx.strokeText(text, gPos.x, gPos.y);
    ctx.fillText(text, gPos.x, gPos.y);
}

function textAlign(alignText) {
    ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
    let text = document.querySelector('.text').value;
    ctx.textAlign = alignText;
    if (alignText === 'align-left') {
        gPos.x = 100;
    } else if (alignText === 'align-center') {
        gPos.x = canvas.width / 2;
    } else {
        gPos.x = canvas.width - 40;
    }
    ctx.strokeText(text, gPos.x, gPos.y);
    ctx.fillText(text, gPos.x, gPos.y);
}

function fontSize(fontSize) {
    ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
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
    console.log(color);
    ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    let text = document.querySelector('.text').value;
    ctx.strokeText(text, gPos.x, gPos.y);
    ctx.fillText(text, gPos.x, gPos.y);
}