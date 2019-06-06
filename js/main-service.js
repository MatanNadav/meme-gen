'use strict'

var gImgs;
var gId = 1;

function createImages() {
    let imgs = [
        createImage('../imgs/2.jpg', ['happy', 'nature']),
        createImage('../imgs/5.jpg', ['baby', 'success']),
        createImage('../imgs/8.jpg', ['condescending', 'wonka']),
        createImage('../imgs/9.jpg', ['evil', 'baby', 'cunning']),
        createImage('../imgs/img11.jpg', ['laughing', 'satisfied'])
    ]
    gImgs = imgs;
    return imgs;
}

function createImage(url, words) {
    let img = {
        id: gId++,
        keywords: words,
        imgUrl: url
    }
    return img
}

function getImg() {
    return gImgs[0];
}