'use strict';

let canvas;
let ctx;
let gPos = { x: 0, y: 0 };
let gImg = new Image();

function onInitGenerator() {
    canvas = document.querySelector('.meme-canvas')
    ctx = canvas.getContext('2d');
    ctx.textAlign = 'center'
    drawImgOnCanvas();
    
    gPos.x = canvas.width / 2;
    gPos.y = 50;
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
    console.log(text.length);
    // if(gPos.x <= 61) {
    //     text = '';
    //     gPos.y += 50;
    //     gPos.x = canvas.width / 2;
    // }
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.font = '30px impact';
    ctx.strokeText(text, gPos.x, gPos.y);
    ctx.fillText(text, gPos.x, gPos.y);
    // let align = textAlign();
    // ctx.textAlign = 'center';
}

function textAlign(align) {
    console.log(align);
    ctx.textAlign = 'left';
    // ctx.strokeText(text, gPos.x, gPos.y);
    // ctx.fillText(text, gPos.x, gPos.y);
}