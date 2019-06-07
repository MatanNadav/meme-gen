'use strict';

let gMeme;

function createMeme(selectedImgId) {
    let meme = {
        selectedImgId: selectedImgId,
        txts: [
            {
                line: line,
                size: size,
                align: align,
                color: color
            }
        ]
    }
    saveMeme(meme);
    return meme;
}

function saveMeme(meme) {
    saveToStorage('meme', meme);
}