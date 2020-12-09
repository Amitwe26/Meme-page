'use strict'

let gCanvas
let gCtx

function init() {
    onRenderImgs(gImgs)
}

function onRenderImgs() {

    var strHtml = gImgs.map(function (image) {
        return `
         <img class="image" src="${image.url}" alt="image" onclick="onViewImage(${image.id})">
         
         `
    })
    var elImgs = document.querySelector('.container-pictures');
    elImgs.innerHTML = strHtml.join('');
}

function onViewImage(imageId) {
    onUpdateMemeId(imageId);
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    var img = new Image()
    img.src = `img/${imageId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
    }
    onDrowText()

}

function onDrowText() {
    var value = document.querySelector('.input-user').value;
    console.log(value, 'amit is here');
    drawText(value, 320, 100, gMeme);

}

function drawText(text, x, y, gMeme) {
    gCtx.lineWidth = '1.5'
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = gMeme.lines[0].size + 'px'
    gCtx.font = 'italic small-caps 900 40px serif'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onUpdateMemeId(imageId) {
    updateMemeId(imageId);
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

function changeIncrease(size) {
    return gMeme.lines[0].size += size;
}






















