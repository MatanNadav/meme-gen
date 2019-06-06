'use strict';

let canvas;
let ctx;
let pos = { x: 0, y: 0 }

function onInitGenerator() {
    console.log('OK');
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');  
    // drawImgOnCanvas();
}

function drawImgOnCanvas(img) {
    console.log(img);
    // console.log('Height: ',img.clientHeight,'Width:',img.clientWidth);
    // canvas.width = elImg.clientWidth;
    // canvas.height = elImg.clientHeight;
    ctx.drawImage(img);

}

function drawTextOnCanvas(ev) {
    let text = document.querySelector('.text').value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(text === '') pos.x = canvas.width / 2;
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.font = '30px impact';
    ctx.strokeText(text, pos.x, 100);
    ctx.fillText(text, pos.x, 100);
    if(ev.code === 'Backspace' && text !== '') {
        pos.x += 7;
    } else {
        pos.x -= 7;
    }
}
