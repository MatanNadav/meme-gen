'use strict'

let gImgs;
let gImagesToRemove = [];
let gId = 1;

function createImages() {
    let imgs = [
        createImage('imgs/2.jpg', ['happy', 'nature']),
        createImage('imgs/5.jpg', ['baby', 'success']),
        createImage('imgs/8.jpg', ['condescending', 'wonka']),
        createImage('imgs/9.jpg', ['evil', 'baby', 'cunning']),
        createImage('imgs/img11.jpg', ['laughing', 'satisfied']),
        createImage('imgs/img12.jpg', ['kissing', 'fighters']),
        createImage('imgs/img6.jpg', ['tired', 'dog']),
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
    return img;
}

function getImgById(id) {
    return gImgs.find( img => {
            return img.id === id;
        })
}

<<<<<<< HEAD
function getSearchedMemes(searchStr) {
    // debugger

    return gImgs.filter(img => {
        let keywordStr = img.keywords.join(',');
        if((keywordStr.indexOf(searchStr)) > -1) {
            return img
        } else {

        }
    })
}
=======
>>>>>>> 8740c707d830929630e73080ea4bc974cfc83988
function saveImage(key, imgObj) {
    saveToStorage(key, imgObj);
}

function getImage(key) {
   return loadFromStorage(key);
}