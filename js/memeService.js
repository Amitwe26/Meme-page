'use strict'

var gKeywords = { 'happy': 12, 'funny puk': 1 }

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['political'] },
    { id: 2, url: 'img/2.jpg', keywords: ['pets'] },
    { id: 3, url: 'img/3.jpg', keywords: ['pets', 'baby'] },
    { id: 4, url: 'img/4.jpg', keywords: ['pets'] },
    { id: 5, url: 'img/5.jpg', keywords: ['baby'] },
    { id: 6, url: 'img/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'img/7.jpg', keywords: ['baby'] },
    { id: 8, url: 'img/8.jpg', keywords: ['happy'] },
    { id: 9, url: 'img/9.jpg', keywords: ['baby'] },
    { id: 10, url: 'img/10.jpg', keywords: ['political'] },
    { id: 11, url: 'img/11.jpg', keywords: ['happy'] },
    { id: 12, url: 'img/12.jpg', keywords: ['happy'] },
    { id: 13, url: 'img/13.jpg', keywords: ['movie'] },
    { id: 14, url: 'img/14.jpg', keywords: ['movie'] },
    { id: 15, url: 'img/15.jpg', keywords: ['movie'] },
    { id: 16, url: 'img/16.jpg', keywords: ['movie'] },
    { id: 17, url: 'img/17.jpg', keywords: ['political'] },
    { id: 18, url: 'img/18.jpg', keywords: ['movie'] },

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

function getImgs() {
    return gImgs;
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

