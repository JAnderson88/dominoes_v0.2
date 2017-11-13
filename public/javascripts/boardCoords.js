class BoardCoords{
    constructor(boardDim){
        this.coords = this.constructBoardCoord(boardDim)
    }
 
    constructBoardCoord(boardDim){
        return {
            boardDim: boardDim,
            tileDim: {height: 40, width:25},
            startPosition: {x: boardDim.width/2, y: (boardDim.height/2) - 15},
            holderRight: {x:null, y:null},
            holderLeft: {x:null, y:null},
            holderAltRight: {x:null, y:null},
            holderAltLeft: {x:null, y:null}
        }
    }

    setBoardDim(coords){
        this.coords = coords
    }

    getBoardDim(coords){
        return this.coords
    }
}