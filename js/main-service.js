'use strict'

let gImgs;
let gImagesToRemove = [];
let gId = 1;
let gPopularSearch;


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
        createImage('imgs/005.jpg', ['dog', 'baby', 'sleep', 'cute', 'smile', 'bed']),
        createImage('imgs/006.jpg', ['cat', 'sleep', 'computer']),
        createImage('imgs/12.jpg', ['blaming', 'finger']),
        createImage('imgs/Ancient-Aliens.jpg', ['if', 'history', 'aliens', 'let me explain']),
        createImage('imgs/drevil.jpg', ['evil', 'quotes', 'fake', 'powers']),
        createImage('imgs/img2.jpg', ['africa', 'baby', 'dance', 'fun', 'naked']),
        createImage('imgs/img5.jpg', ['baby', 'surprise', 'funny', 'cute']),
        createImage('imgs/leo.jpg', ['leo dicaprio', 'salute', 'cheers', 'fancy']),
        createImage('imgs/meme1.jpg', ['matrix', 'what if', 'serious']),
        createImage('imgs/meme2.jpg', ['one does not', 'game thrones', 'sean', 'explain']),
        createImage('imgs/meme3.jpg', ['oprah', 'you get', 'shout']),
        createImage('imgs/patrick.jpg', ['patrick', 'holding', 'laugh', 'cry']),
        createImage('imgs/putin.jpg', ['putin', 'two', 'strong', 'russia']),
        createImage('imgs/meme4.jpg', ['toy story', 'two', 'buzz', 'cowboy', 'stars', 'look']),
        createImage('imgs/russian.jpg', ['russian', 'badass', 'sexy', 'beer']),
        createImage('imgs/arm-wrestle.png', ['strong', 'muscle', 'black', 'white', 'arm wrestle']),
        createImage('imgs/meme5.jpg', ['thinking', 'know best', 'black', 'use mind']),
        createImage('imgs/grandma.jpg', ['grandma', 'cant see', 'glasses', 'backwords', 'understand']),
        createImage('imgs/office.jpg', ['office', 'coffee', 'spandex']),
        createImage('imgs/grylls.jpg', ['bear', 'grylls', 'improvise', 'adapt', 'overcome']),
        createImage('imgs/ohno.jpg', ['stress', 'what to push', 'sweat', 'pressure', 'bomb']),
        createImage('imgs/drake.jpg', ['yes', 'no', 'oh', 'feel good', 'dance']),
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
    return gImgs.find(img => {
        return img.id === id;
    })
}

function getSearchedMemes(searchStr) {
    return gImgs.filter(img => {
        let keywordStr = img.keywords.join(',');
        if ((keywordStr.indexOf(searchStr)) > -1) {
            return img
        }
    })
}


function setPopularSearches(inputVal) {
    let str = inputVal;
    gPopularSearch = getValue('popularSearch')
    if(!gPopularSearch) {
        gPopularSearch = {};
    }

    gPopularSearch[str] ? gPopularSearch[str]++ : gPopularSearch[str] = 1;
    
    saveValue('popularSearch', gPopularSearch)
    console.log(gPopularSearch);
}

function getPopularSearchesArray() {
    var searches = getSortedArrayFromObject();
    return searches;
}


function saveValue(key, value) {
    saveToStorage(key, value);
}

function getValue(key) {
    return loadFromStorage(key);
}