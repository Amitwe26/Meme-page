'use strict'

let gCanvas;
let gCtx;

function init() {
    onRenderImgs(gImgs);
}

function onRenderImgs() {

    var strHtml = gImgs.map(function (image) {
        return `
         <img class="image" src="${image.url}" alt="image" onclick="onDrawImage(${image.id},'new')">
         
         `
    })
    var elImgs = document.querySelector('.container-pictures');
    elImgs.innerHTML = strHtml.join('');

}

function renderCanvas() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    clearCanvas();
    onDrawImage(gMeme.selectedImgId)
    onDrawTxtVal();
}

function onDrawImage(imageId, newPicture) {
    if (newPicture === 'new') {
        gCurrLines = 0;
        cleanTxtObjs();
    }
    onUpdateMemeId(imageId);
    openContainer();
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    var img = new Image();
    img.src = `img/${imageId}.jpg`;
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
}

function openContainer() {
    var elContainer = document.querySelector('.container-canvas');
    var elContainerPicture = document.querySelector('.container-pictures');
    document.querySelector('.btn-gallery').style.display = 'flex';
    document.querySelector('.search-container').style.display = 'none';
    elContainer.hidden = false;
    elContainer.classList.add('flex');
    elContainerPicture.style.display = 'none';
}

function openGallery() {
    var elContainer = document.querySelector('.container-canvas');
    var elContainerPicture = document.querySelector('.container-pictures');
    document.querySelector('.btn-gallery').style.display = 'none';
    document.querySelector('.search-container').style.display = 'flex';
    elContainer.hidden = true;
    elContainerPicture.style.display = 'block';
    elContainer.classList.remove('flex');
}

function onDrawTxtVal() {
    let lines = getLines();
    lines.forEach(function (line) {
        gCtx.beginPath();
        gCtx.font = `${line.size}px ${gFontTxt}`;
        gCtx.lineWidth = '1.5';
        gCtx.strokeStyle = 'black';
        gCtx.fillStyle = line.color;
        gCtx.textAlign = line.align;
        gCtx.fillText(line.txt, line.axisX, line.axisY);
        gCtx.strokeText(line.txt, line.axisX, line.axisY);
        gCtx.save()
    })
    onDrawRect()
}

function onDrawRect() {
    let lines = getLines();
    lines.forEach(function (line) {

        gCtx.beginPath();
        gCtx.rect(0, line.axisY - 75, 500, 100);
        gCtx.fillStyle = '#00000000';
        gCtx.closePath();
        gCtx.fill();
        gCtx.stroke();
    })
}


function onDrawText(ev, value, clean) {
    var key = ev.key;
    var numline = gCurrLines;
    if (key === 'Enter') {
        _clearInputTxt();
    }
    if (gCurrLines === 3) return
    saveValFromUser(value, numline);
    if (clean === 'clean') {
        _clearInputTxt();
    }
}


function onUpdateMemeId(imageId) {
    updateMemeId(imageId);
}

function onChangePosition(direction) {
    if (direction === 'up' ? changePosition(-10) : changePosition(+10));
}

function onChangeIncrease(size) {
    changeIncrease(size);
}

function onFontSelect(font) {
    gFontTxt = font;
    renderCanvas();
}

function onChangeColor(color) {
    changeColor(color);
}

function onChangeAlignTxt(pos) {
    changeAlignTxt(pos);
}

function onAddLine() {
    updateCurrLine();
}

function onSelectLine() {
    selectLine();
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function _clearInputTxt() {
    document.querySelector('.input-user').value = '';

}

function onToggleMenu() {
    var elMenu = document.body.classList.toggle('main-bar')
    if (elMenu) {
        document.querySelector('.menu-btn').innerText = 'X'
        document.querySelector('.list-mobile').style.display = 'block';
    } else {
        document.querySelector('.menu-btn').innerText = '☰'
        document.querySelector('.list-mobile').style.display = 'none';

    }

}





















