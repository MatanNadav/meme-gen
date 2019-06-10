'use strict';

let canvas;
let ctx;
let gImg = new Image();
let lines = [{ text: '', x: 0, y: 0, fontSize: 0, color: '' }, { text: '', x: 0, y: 0, fontSize: 0, color: '' }, { text: '', x: 0, y: 0, fontSize: 0, color: '' }];
let isUploadImg = false;
let gRadioPrevious = document.querySelector('.radio-text-one');


function onInitGenerator() {
    canvas = document.querySelector('.meme-canvas')
    ctx = canvas.getContext('2d');
    createLines();
    drawImgOnCanvas();
}

function drawImgOnCanvas() {
    if (!isUploadImg) {
        let imgFromStorage = getValue('meme');
        gImg.src = imgFromStorage.imgUrl;
    }
    gImg.onload = function () {
        changedCanvasSize();
    }
}

function changedCanvasSize() {
    if ($(window).width() <= 740) {
        canvas.width = 300;
        canvas.height = 300;
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
    lines[2].y = canvas.height / 2 + 20;
}

function drawTextOnCanvas() {
    ctx.drawImage(gImg, 0, 0, canvas.width, canvas.height);
    lines[0].text = document.querySelector('.text-top').value;
    lines[1].text = document.querySelector('.text-bottom').value;
    lines[2].text = document.querySelector('.text-middle').value;
    lines.forEach(element => {
        drawOneLineTextInCanvasWidth(element);
    });
}

function changeFont(font) {
    ctx.font = lines[0].fontSize + ' ' + font;
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
        lines[0].y += 1.5;
    } else {
        ctx.font = ctx.font.replace(/\d+px/, (parseInt(ctx.font.match(/\d+px/)) - 2) + 'px');
        lines[0].y -= 1.5;
    }
    lines.forEach(element => {
        drawOneLineTextInCanvasWidth(element);
        element.fontSize = ctx.font.split(' ')[0];
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

function onInputChange(el) {
    let radio;
    if (el.dataset.trans === 'generator-text-two') {
        radio = document.querySelector('.radio-text-two')
        radio.checked = true;
        gRadioPrevious.checked = false;
        gRadioPrevious = radio;
    } else if (el.dataset.trans === 'generator-text-three') {
        radio = document.querySelector('.radio-text-three')
        radio.checked = true;
        gRadioPrevious.checked = false;
        gRadioPrevious = radio;
    } else {
        radio = document.querySelector('.radio-text-one');
        radio.checked = true;
        gRadioPrevious.checked = false;
        gRadioPrevious = radio;
    }
}

function onContactClick() {
    document.querySelector('.contact-container').classList.toggle('in')
}

function onOperateModal(el) {
    let email = document.querySelector('.email-input').value
    let userMsg = document.querySelector('.user-email-confirmation')
    const cross = '❌';
    const check = '✔️';
    if (!email) {
        userMsg = document.querySelector('.user-email-confirmation')
        userMsg.innerText = cross;
        return;
    }
    else {
        let emails = [];
        emails.push(email);
        userMsg.innerText = check;
    }
}

function toggleMenu() {
    document.querySelector('.side-nav').classList.toggle('open')
    
}