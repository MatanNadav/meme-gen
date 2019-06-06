'use strict';

let canvas;
let ctx;
let gPos = { x: 0, y: 0 }

function onInitGenerator(imgId) {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
}

function onImgId(imgId) {
    let imgSrc = getImgById(imgId);
    let gSrcImg = imgSrc.imgUrl;
    console.log(gSrcImg);
    debugger
    // let img = new Image();
    // gSrcImg = getImgById(imgId);
    // img.src = gSrcImg.imgUrl;
    // img.onload = function () {
    //     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    // }
    drawImgOnCanvas(gSrcImg);
}

function drawImgOnCanvas(gSrcImg) {
    onInitGenerator();
    console.log(gSrcImg);
    let img = new Image();
    img.src = gSrcImg;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    debugger;
}

function drawTextOnCanvas(ev) {
    let text = document.querySelector('.text').value;
    console.log(gSrcImg);
    // drawImgOnCanvas()
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