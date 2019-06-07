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
        createImage('imgs/003.jpg', ['trump', 'orange', 'vain', 'angry']),
        createImage('imgs/004.jpg', ['dog', 'cute', 'love', 'sweet']),
        createImage('imgs/005.jpg', ['dog', 'baby','sleep', 'cute','smile','bed']),
        createImage('imgs/006.jpg', ['cat', 'sleep', 'computer']),
        createImage('imgs/12.jpg', ['blaming', 'finger']),
        createImage('imgs/Ancient-Aliens.jpg', ['if', 'history', 'aliens', 'let me explain']),
        createImage('imgs/drevil.jpg', ['evil', 'quotes', 'fake', 'powers']),
        createImage('imgs/img2.jpg', ['africa', 'baby','dance','fun','naked']),
        createImage('imgs/img5.jpg', ['baby', 'surprise', 'funny','cute']),
        createImage('imgs/leo.jpg', ['leo dicaprio', 'salute', 'cheers','fancy']),
        createImage('imgs/meme1.jpg', ['matrix', 'what if', 'serious']),
        createImage('imgs/meme2.jpg', ['one does not', 'game thrones', 'sean','explain']),
        createImage('imgs/meme3.jpg', ['oprah', 'you get', 'shout']),
        createImage('imgs/patrick.jpg', ['patrick', 'holding', 'laugh','cry']),
        createImage('imgs/putin.jpg', ['putin', 'two', 'strong','russia']),
        createImage('imgs/meme4.jpg', ['top story', 'two', 'buzz','cowboy','stars','look'])
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

function getSearchedMemes(searchStr) {
    return gImgs.filter(img => {
        let keywordStr = img.keywords.join(',');
        if((keywordStr.indexOf(searchStr)) > -1) {
            return img
        } else {

        }
    })
}
function saveImage(key, imgObj) {
    saveToStorage(key, imgObj);
}

function getImage(key) {
   return loadFromStorage(key);
}