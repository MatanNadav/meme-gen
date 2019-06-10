'use strict';

let canvas;
let ctx;
let gImg = new Image();
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
        changedCanvasSize();
    }
}

function changedCanvasSize() {
    if($(window).width() <= 740) {
        canvas.width = 470;
        canvas.height = 460;
    } else {
        canvas.width = gImg.naturalWidth;
        canvas.height = gImg.naturalHeight;
    }
    resetImgSettings();
    ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
    lines.forEach(element => {
        drawOneLineTextInCanvasWidth(element);
    });
}

function resetImgSettings() {
    ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.textAlign = 'center';
        ctx.font = '60px impact';
        lines.forEach(element => {
            element.x = canvas.width / 2;
        });
        lines[0].y = 70;
        lines[1].y = canvas.height - 25;
        lines[2].y = canvas.height / 2; 
}

function drawTextOnCanvas() {
    ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
        lines[0].text = document.querySelector('.text-one').value;
        lines[1].text = document.querySelector('.text-two').value;
        lines[2].text = document.querySelector('.text-three').value;
        lines.forEach(element => {
            drawOneLineTextInCanvasWidth(element);
        });
}

function changeFont(font) {
    ctx.font = '60px ' + font;
    ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
    lines.forEach(element => {
        drawOneLineTextInCanvasWidth(element);
    });
}

function textAlign(alignText) {
    ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
    if (alignText === 'left') {
        lines.forEach(element => {
            element.x = 10;
        });
    } else if (alignText === 'center') {
        lines.forEach(element => {
            element.x = canvas.width / 2;
        });
    } else {
        lines.forEach(element => {
            element.x = canvas.width - 20;
        });
    }
    ctx.textAlign = alignText;
    lines.forEach(element => {
        drawText(element.text, element.x, element.y);
    });
}

function fontSize(fontSize) {
    ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
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
    ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    lines.forEach(element => {
        drawOneLineTextInCanvasWidth(element);
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