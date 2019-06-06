'use strict';

let canvas;
let ctx;
let pos = { x: x, y: y }

function onInitGenerator() {
    console.log('OK');
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    // drawImgOnCanvas();
}

function drawImgOnCanvas(img) {
    console.log(img);
    // let img = document.querySelector('.img');
    // console.log('Height: ',img.clientHeight,'Width:',img.clientWidth);
    // canvas.width = img.clientWidth;
    // canvas.height = img.clientHeight;
    // ctx.drawImage(img);
}

function drawTextOnCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    let text = document.querySelector('.text').value;
    ctx.font = '30px impact';
    ctx.strokeText(text, 100, 100);
    ctx.fillText(text, 100, 100);

}
