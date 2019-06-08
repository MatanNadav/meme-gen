'use strict';

let canvas;
let ctx;
let gPos = { x: 0, y: 0 };
let gImg = new Image();
let textObj = { text: '', x: 0, y: 0 };

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
        ctx.font = '60px impact';
        gPos.x = gImg.naturalWidth / 2;
        gPos.y = 100;
        ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
    }
}

function drawTextOnCanvas() {
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
    textObj.text = document.querySelector('.text').value;
    textObj.x = gPos.x;
    textObj.y = gPos.y;
    drawOneLineTextInCanvasWidth();
    // let lines = splitTextToLines(textObj.text);
    // drawOneLineTextInCanvas(lines[0],textObj.x,textObj.y);
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
    drawText(text, gPos.x, gPos.y);
}

function fontSize(fontSize) {
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
    let text = document.querySelector('.text').value;
    if (fontSize === 'increese-font-size') {
        ctx.font = ctx.font.replace(/\d+px/, (parseInt(ctx.font.match(/\d+px/)) + 2) + 'px');
    } else {
        ctx.font = ctx.font.replace(/\d+px/, (parseInt(ctx.font.match(/\d+px/)) - 2) + 'px');
    }
    drawOneLineTextInCanvasWidth();
}

function changeColor(color) {
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
    ctx.fillStyle = color;
    let text = document.querySelector('.text').value;
    drawText(text, gPos.x, gPos.y);
}

function drawOneLineTextInCanvasWidth() {
    let textWidth = ctx.measureText(textObj.text).width;
    if (textWidth <= canvas.width) {
        drawText(textObj.text, textObj.x, textObj.y);
    } else {
        let newText = textObj.text;
        do {
            newText = newText.slice(0, -1);
        } while (ctx.measureText(newText).width > canvas.width)
        drawText(newText, textObj.x, textObj.y);
    }
}

function drawText(text, posX, posY) {
    ctx.strokeText(text, posX, posY);
    ctx.fillText(text, posX, posY);
}

// function splitTextToLines(originalText) {
    // let lines = [];
    // let textWidth = ctx.measureText(textObj.text).width;
    // if (textWidth <= canvas.width || originalText.length === 0) {
    //     lines.push(originalText);
    // } else {
    //     let newText = originalText;
    //     do {
    //         newText = newText.slice(0, -1);
    //     } while (ctx.measureText(newText).width > canvas.width)

    // }
    // return lines;
// }