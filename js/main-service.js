'use strict'

let gImgs;
let gId = 1;

function createImages() {
    gImgs = [
        createImage('../imgs/2.jpg', ['happy', 'nature']),
        createImage('../imgs/5.jpg', ['baby', 'success']),
        createImage('../imgs/8.jpg', ['condescending', 'wonka']),
        createImage('../imgs/9.jpg', ['evil', 'baby', 'cunning']),
        createImage('../imgs/img11.jpg', ['laughing', 'satisfied'])
    ]
    return gImgs;
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
    return gImg[0]
}