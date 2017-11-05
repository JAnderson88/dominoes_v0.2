const board = document.querySelector('.board')
// const boardctx = board.getContext("2d")
const deck = document.querySelector('.deck')
let boardPieces = []
let boardCoord = {
    height: 135,
    width: 270,
    longSide: {width: 25, height: 15},
    tallSide: {width: 15, height: 25},
    startPosition: {x: 270/2, y: 65},
    holderRight: {x:null,y:null},
    holderLeft: {x:null,y:null},
    holderAltRight: {x:null,y:null},
    holderAltLeft: {x:null,y:null},
}

