'use strict';

let gLines;

function createLines() {
    let lines = getValue('lines');
    if(!lines || !lines.length) {
        lines = [
            createLine('', 0, 0, '', '', ''),
            createLine('', 0, 0, '', '', ''),
            createLine('', 0, 0, '', '', '')
        ]
    }
    gLines = lines;
    saveValue('lines', gLines);
    return lines;
}

function createLine(text, x, y, fontSize, align, color) {
    let line = {
        text: text,
        x: x,
        y: y,
        fontSize: fontSize,
        align: align,
        color: color
    }
    return line;
}

function saveValue(key, value) {
    saveToStorage(key, value);
}

function getValue(key) {
    return loadFromStorage(key);
}