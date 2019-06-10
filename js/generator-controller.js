'use strict';

let canvas;
let ctx;
let gImg = new Image();
let topLineObj = { text: '', x: 0, y: 0 };
let bottomLineObj = { text: '', x: 0, y: 0 };
let middleLineObj = { text: '', x: 0, y: 0 };
let lines = [{ text: '', x: 0, y: 0 }, { text: '', x: 0, y: 0 }, { text: '', x: 0, y: 0 }];
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
        lines.forEach(element => {
            element.x = gImg.naturalWidth / 2;
        });
        lines[0].y = 70;
        lines[1].y = gImg.naturalHeight - 25;
        lines[2].y = gImg.naturalHeight / 2; 
        topLineObj.x = gImg.naturalWidth / 2;
        topLineObj.y = 70;
        bottomLineObj.x = gImg.naturalWidth / 2;
        bottomLineObj.y = gImg.naturalHeight - 25; 
        middleLineObj.x = gImg.naturalWidth / 2; 
        middleLineObj.y = gImg.naturalHeight / 2; 
}

function drawTextOnCanvas() {
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
        lines[0].text = document.querySelector('.text-one').value;
        lines[1].text = document.querySelector('.text-two').value;
        lines[2].text = document.querySelector('.text-three').value;
        lines.forEach(element => {
            drawOneLineTextInCanvasWidth(element);
        });
}

function changeFont(font) {
    ctx.font = '60px ' + font;
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
    lines.forEach(element => {
        drawOneLineTextInCanvasWidth(element);
    });
}

function textAlign(alignText) {
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
    topLineObj.text = document.querySelector('.text-one').value;
    bottomLineObj.text = document.querySelector('.text-two').value;
    middleLineObj.text = document.querySelector('.text-three').value;
    if (alignText === 'left') {
        lines.forEach(element => {
            element.x = 10;
        });
    } else if (alignText === 'center') {
        lines.forEach(element => {
            element.x = gImg.naturalWidth / 2;
        });
    } else {
        lines.forEach(element => {
            element.x = gImg.naturalWidth - 40;
        });
    }
    ctx.textAlign = alignText;
    lines.forEach(element => {
        drawText(element.text, element.x, element.y);
    });
}

function fontSize(fontSize) {
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
    if (fontSize === 'increese-font-size') {
        ctx.font = ctx.font.replace(/\d+px/, (parseInt(ctx.font.match(/\d+px/)) + 2) + 'px');
    } else {
        ctx.font = ctx.font.replace(/\d+px/, (parseInt(ctx.font.match(/\d+px/)) - 2) + 'px');
    }
    lines.forEach(element => {
        drawOneLineTextInCanvasWidth(element);
    });
}

function changeColor(color) {
    ctx.drawImage(gImg, 0, 0, gImg.naturalWidth, gImg.naturalHeight);
    ctx.fillStyle = color;
    lines.forEach(element => {
        drawText(element.text, element.x, element.y);
    });
}

function drawOneLineTextInCanvasWidth(textObj) {
    let textWidth = ctx.measureText(textObj.text).width;
    if (textWidth <= canvas.width) {
        drawText(textObj.text, textObj.x, textObj.y);
    } else {
        let newText =  textObj.text;  
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

// function drawText(lines) {
//     lines.forEach(element => {
//         ctx.strokeText(element.text, element.x, element.y);
//         ctx.fillText(element.text, element.x, element.y);
//     });
// }

function downloadCanvas(elLink) {
    const data = canvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-img.jpg';
}

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