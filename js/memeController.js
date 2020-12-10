'use strict'

let gCanvas;
let gCtx;

function init() {
    onRenderImgs(gImgs)
}

function onRenderImgs() {

    var strHtml = gImgs.map(function (image) {
        return `
         <img class="image" src="${image.url}" alt="image" onclick="onDrawImage(${image.id})">
         
         `
    })
    var elImgs = document.querySelector('.container-pictures');
    elImgs.innerHTML = strHtml.join('');

}

function renderCanvas(imgId) {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    clearCanvas()
    onDrawImage(gMeme.selectedImgId)
    drawTxtVal()
}

function onDrawImage(imageId) {
    onUpdateMemeId(imageId);
    openContainer()
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    var img = new Image()
    img.src = `img/${imageId}.jpg`;
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend

}
function openContainer() {
    var elContainer = document.querySelector('.container-canvas')
    elContainer.hidden = false;
    elContainer.classList.add('flex');
}

function drawTxtVal() {
    // window.changeVal = function (val) {}
    let lines = getLines()
    lines.forEach(function (line) {
        gCtx.beginPath()
        gCtx.fillText('', line.axisX, line.axisY)
        gCtx.font = `${line.size}px impact`
        gCtx.lineWidth = '1.5'
        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = line.color
        gCtx.textAlign = 'center'
        gCtx.fillText(line.txt, line.axisX, line.axisY)
        gCtx.strokeText(line.txt, line.axisX, line.axisY)
        gCtx.save()

    })
}



function onDrawTextTop() {
    var value = document.querySelector('.input-usertop').value;
    saveValFromUser(value, 0)
    clearInputClick('top')
}
function onDrawTextBot() {
    var value = document.querySelector('.input-userbot').value;
    saveValFromUser(value, 1)
    clearInputClick('bot')
}

function onUpdateMemeId(imageId) {
    updateMemeId(imageId);
}


function onChangeIncrease(size, lineIdx) {
    changeIncrease(size, lineIdx)
}

function onChangeColor(color, num) {
    console.log(color);
    changeColor(color, num)
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

function clearInputClick(val) {
    document.querySelector(`.input-user${val}`).value = '';

}





















