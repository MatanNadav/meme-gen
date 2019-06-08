


function saveToStorage(key, value) {
    var strValue = JSON.stringify(value);
    localStorage.setItem(key, strValue);
}


function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function getSortedArrayFromObject() {
    let popular = [];
    let popularSearches = loadFromStorage('popularSearch')

    for (let search in popularSearches) {
        popular.push([search, popularSearches[search]])
    }
    popular.sort(function (a,b) {
        return b[1] - a[1]
    });

    return popular;
}