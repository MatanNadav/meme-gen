'use strict'



let gImgs;


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

    var img = {
        id: 1,
        keywords: words,
        imgUrl: url
    }
    return img
}