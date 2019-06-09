'use strict';

let canvas;
let ctx;
let gImg = new Image();
let lineOneObj = { text: '', x: 0, y: 0 };
let lineTwoObj = { text: '', x: 0, y: 0 };
let isUploadImg = false;

function onInitGenerator() {
    canvas = document.querySelector('.meme-canvas')
    ctx = canvas.getContext('2d');
    drawImgOnCanvas();
}

function drawImgOnCanvas() {
    if(!isUploadImg) {
        let imgFromStorage = getValue('meme');
        gImg.src = imgFromStorage.imgUrl;
    }
    gImg.onload = function () {
        canvas.width = gImg.naturalWidth;
        canvas.height = gImg.naturalHeight;
        resetImgSettings();
        ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
    }
}

function resetImgSettings() {
    ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.textAlign = 'center';
        ctx.font = '60px impact';
        lineOneObj.x = gImg.naturalWidth / 2;
        lineOneObj.y = 70;
        lineTwoObj.x = gImg.naturalWidth / 2;
        lineTwoObj.y = gImg.naturalHeight - 25; 
}

function drawTextOnCanvas() {
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
        lineOneObj.text = document.querySelector('.text-one').value;
        lineTwoObj.text = document.querySelector('.text-two').value;
        // ctx.save();
        drawOneLineTextInCanvasWidth();
        drawTwoLineTextInCanvasWidth(); 
        // ctx.restore();
}

function changeFont(font) {
    ctx.font = '60px ' + font;
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
    drawOneLineTextInCanvasWidth();
    drawTwoLineTextInCanvasWidth();
}

function textAlign(alignText) {
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
    lineOneObj.text = document.querySelector('.text-one').value;
    lineTwoObj.text = document.querySelector('.text-two').value;
    if (alignText === 'left') {
            lineOneObj.x = 10;
            lineTwoObj.x = 10;
    } else if (alignText === 'center') {
        lineOneObj.x = gImg.naturalWidth / 2;
        lineTwoObj.x = gImg.naturalWidth / 2;
    } else {
        lineOneObj.x = gImg.naturalWidth - 40;
        lineTwoObj.x = gImg.naturalWidth - 40;
    }
    ctx.textAlign = alignText;
    drawText(lineOneObj.text, lineOneObj.x, lineOneObj.y);
    drawText(lineTwoObj.text, lineTwoObj.x, lineTwoObj.y);
}

function fontSize(fontSize) {
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
    if (fontSize === 'increese-font-size') {
        ctx.font = ctx.font.replace(/\d+px/, (parseInt(ctx.font.match(/\d+px/)) + 2) + 'px');
    } else {
        ctx.font = ctx.font.replace(/\d+px/, (parseInt(ctx.font.match(/\d+px/)) - 2) + 'px');
    }
    drawOneLineTextInCanvasWidth();
    drawTwoLineTextInCanvasWidth();
}

function changeColor(color) {
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
    ctx.fillStyle = color;
    lineOneObj.text = document.querySelector('.text-one').value;
    lineTwoObj.text = document.querySelector('.text-two').value;
    drawText(lineOneObj.text, lineOneObj.x, lineOneObj.y);
    drawText(lineTwoObj.text, lineTwoObj.x, lineTwoObj.y);
}

function drawOneLineTextInCanvasWidth() {
    let textWidth = ctx.measureText(lineOneObj.text).width;
    if (textWidth <= canvas.width) {
        drawText(lineOneObj.text, lineOneObj .x, lineOneObj.y);
    } else {
        let newText =  lineOneObj.text;  
        do {
            newText = newText.slice(0, -1);
        } while (ctx.measureText(newText).width > canvas.width)
        drawText(newText, lineOneObj.x, lineOneObj.y);
    }
}
 
function drawText(text, posX, posY) {
    ctx.strokeText(text, posX, posY);
    ctx.fillText(text, posX, posY);
}

function drawTwoLineTextInCanvasWidth() {
    let textWidth = ctx.measureText(lineTwoObj.text).width;
    if (textWidth <= canvas.width) {
        drawText(lineTwoObj.text, lineTwoObj.x, lineTwoObj.y);
    } else {
        let newText = lineTwoObj.text;
        do {
            newText = newText.slice(0, -1);
        } while (ctx.measureText(newText).width > canvas.width)
        drawText(newText, lineTwoObj.x, lineTwoObj.y);
    }
}

function downloadCanvas(elLink) {
    const data = canvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-img.jpg';
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

function onFileInputChange(ev) {
    handleImageFromInput(ev, renderCanvas)
}

function renderCanvas(img) {
    isUploadImg = true;
    gImg = img;
    canvas.width = gImg.width;
    canvas.height = gImg.height;
    resetImgSettings();
    ctx.drawImage(gImg, 0, 0);
}

//UPLOAD IMG WITH INPUT FILE
function handleImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader();

    reader.onload = function (event) {
        var img = new Image();
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result;
    }
    reader.readAsDataURL(ev.target.files[0]);
}