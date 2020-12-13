'use strict'

var gKeywords = { 'happy': 12, 'funny puk': 1 }

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'img/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'img/3.jpg', keywords: ['happy'] },
    { id: 4, url: 'img/4.jpg', keywords: ['happy'] },
    { id: 5, url: 'img/5.jpg', keywords: ['happy'] },
    { id: 6, url: 'img/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'img/7.jpg', keywords: ['happy'] },
    { id: 8, url: 'img/8.jpg', keywords: ['happy'] },
    { id: 9, url: 'img/9.jpg', keywords: ['happy'] },
    { id: 10, url: 'img/10.jpg', keywords: ['happy'] },
    { id: 11, url: 'img/11.jpg', keywords: ['happy'] },
    { id: 12, url: 'img/12.jpg', keywords: ['happy'] },
    { id: 13, url: 'img/13.jpg', keywords: ['happy'] },
    { id: 14, url: 'img/14.jpg', keywords: ['happy'] },
    { id: 15, url: 'img/15.jpg', keywords: ['happy'] },
    { id: 16, url: 'img/16.jpg', keywords: ['happy'] },
    { id: 17, url: 'img/17.jpg', keywords: ['happy'] },
    { id: 18, url: 'img/18.jpg', keywords: ['happy'] },

];

var gCurrImg = null;
var gCurrLine = 0;
var gFontTxt = 'impact'


var gMeme = {
    selectedImgId: 0,
    lines: [
        {
            id: 'up',
            txt: '',
            size: 60,
            align: 'center',
            color: 'black',
            axisX: 250,
            axisY: 100
        },
        {
            id: 'down',
            txt: '',
            size: 60,
            align: 'center',
            color: 'black',
            axisX: 250,
            axisY: 400
        },
    ]
}

function setCurrImg(imageId) {
    gCurrImg = getImgByID(imageId);
}

function getLines() {
    return gMeme.lines;
}

function addLine() {
    var newLine =
    {
        id: 'center',
        txt: '',
        size: 60,
        align: 'center',
        color: 'black',
        axisX: 250,
        axisY: 250
    }
    gMeme.lines.push(newLine);
    console.log(gMeme.lines, 'after push');
}

function selectLine() {
    var linesLength = gMeme.lines.length;
    if (gCurrLine === linesLength - 1) gCurrLine = 0;
    else gCurrLine++;
    console.log('line', gCurrLine);
    _clearInputTxt()

}
function getMeme() {
    return gMeme;
}
function getCurrentLine() {
    return gCurrLine;
}

function findIdImg(imageId) {
    return gImgs.find(function (image) {
        return image.id === imageId;
    });
}

function changeIncrease(size) {
    var lineIdx = gCurrLine;
    gMeme.lines[lineIdx].size += size;
    onDrawImage(gMeme.selectedImgId);
}

function changePosition(num) {
    gMeme.lines[gCurrLine].axisY += num;
}

function updateMemeId(imageId) {
    gMeme.selectedImgId = imageId;
}

function saveValFromUser(value) {
    var line = getCurrentLine()
    gMeme.lines[line].txt = value;
}

function changeColor(color) {
    gMeme.lines[gCurrLine].color = color;

}

function changeAlignTxt(position) {
    var numAlign = gCurrLine;
    if (position === 'right') gMeme.lines[numAlign].align = position;
    if (position === 'left') gMeme.lines[numAlign].align = position;
    if (position === 'center') gMeme.lines[numAlign].align = position;

}

function getCurrImage() {
    return gCurrImg;
}

function canvas() {
    gCanvas = document.querySelector('.my-canvas');
}

function cleanTxtObjs() {
    var objs = gMeme.lines;
    objs.forEach(function (obj) {
        obj.txt = '';
    })
}

