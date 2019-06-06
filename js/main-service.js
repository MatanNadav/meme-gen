'use strict'

let gImgs;


function createImages() {
    gImgs = [
        createImage(),
        createImage(),
        createImage(),
        createImage(),
        createImage()
    ]
}


function createImage(url, words) {

    var img = {
        id: 1,
        keywords: words,
        imgUrl: url
    }
    return img
}