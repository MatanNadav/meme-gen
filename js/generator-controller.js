'use strict';

let canvas;
let ctx;
let gPos = { x: 0, y: 0 }
console.log('got here');

function onInitGenerator() {
    var img = getImage('meme');
    canvas = document.querySelector('.meme-canvas')
    ctx = canvas.getContext('2d');
    drawImgOnCanvas(img);
}

function onImgId() {
    // let imgSrc = getImgById(imgId);
    // let gSrcImg = imgSrc.imgUrl;
    // console.log(gSrcImg);
    // debugger
    // let img = new Image();
    // gSrcImg = getImgById(imgId);
    // img.src = gSrcImg.imgUrl;
    // img.onload = function () {
    //     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    // }
    // drawImgOnCanvas(gSrcImg);
}

function drawImgOnCanvas(imgObj) {
    console.log(imgObj);
    let img = new Image();
    img.src = imgObj.imgUrl;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
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