'use strict'

let gTrans = {
    'welcome-h1': {
        en: 'Welcome to meme generator',
        he: 'ברוכים הבאים למחולל המימים'
    },
    'wiki-link': {
        en: 'Find out more about memes',
        he: 'גלו יותר על מימים',
    },
    'search-placeholder': {
        en: 'Search memes',
        he: 'חיפוש',
    },
    'footer-share': {
        en: 'Share us',
        he: 'שתפו אותנו'
    },
    'generator-home-link': {
        en: 'Home Page',
        he: 'דף הבית',
    },
    'generator-text-placeholder': {
        en: 'Enter Text',
        he: 'הכנס כיתוב',
    },
    'generator-download-link': {
        en: 'download',
        he: 'הורדה',
    },
    'generator-footer-share': {
        en: 'Share us',
        he: 'שתפו אותנו'

    },
    sure: {
        en: 'Are you sure?',
        he: 'בטוח נשמה?',
    },
    'add-todo-placeholder': {
        en: 'What needs to be done?',
        he: 'מה יש לעשות?'
    }
}




let gCurrLang = 'en';

function setLang(lang) {
    gCurrLang = lang;
    // saveToStorage('language', gCurrLang)
}


function doTrans() {
    var els = document.querySelectorAll('[data-trans]');

    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        // var transKey = el.getAttribute('data-trans');
        var transKey = el.dataset.trans;

        var txt = getTrans(transKey);

        // Translating is actually complex and needs a library
        if (el.nodeName === 'INPUT') {
            el.setAttribute('placeholder', txt);
        } else {
            el.innerText = txt;
        }
    }
}


function getTrans(transKey) {
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';

    var txt = keyTrans[gCurrLang];

    // If not found - use english
    if (!txt) txt = keyTrans['en'];

    return txt;
}

// function checkLang() {
//     gCurrLang = loadFromStorage('language');
//     if (gCurrLang) {
//         if (gCurrLang === 'he') {
//             document.body.classList.add('rtl');
//         }
//         else document.body.classList.remove('rtl');
//         doTrans();
//     } 
// }