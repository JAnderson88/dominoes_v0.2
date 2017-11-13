// import _ from 'lodash'
class Game{
    constructor(board, size, boardDim, turn ,tile){
        this.board = board
        this.size = size
        this.turn = turn
        this.coords = new BoardCoords(boardDim)
        this.tile = tile
        this.count = [0,0,0,0,0,0,0,0,0.0]
        this.deck = this.shuffleDeck(this.createDeck(), this.size)
        this.players = {
            player1: new Player(true),
            player2: new Player(false),
            player3: new Player(false),
            player4: new Player(false)
        }
        this.dispenseTiles(this.deck, this.players)
        this.changeTurn = this.changeTurn.bind(this)
        this.updateCoords = this.updateCoords.bind(this)
        this.updateTiles = this.updateTiles.bind(this)
        this.startGame = this.startGame.bind(this)
        this.setTurns = this.setTurns.bind(this)
        this.doTurn = this.doTurn.bind(this)
        this.startGame(this.players, this.setTurns, this.tile, this.updateCoords, this.updateTiles)
        
    }

    createDeck(){
        let deck = []
        for(let i=0; i<=this.size; i++){
            for(let j=i; j<=this.size; j++){
                deck.push([i,j])
            }
        }
        return deck
    }

    getSize(size){
        return(size === 6) ? 28 : (size === 9) ? 55 : 28
    }

    shuffleDeck(deck, s){
        let shuffledDeck = []
        for(let i=0; i<this.getSize(this.size); i++){
            let index = Math.floor(Math.random()*deck.length);
            shuffledDeck.push(deck[index])
            deck.splice(index, 1)
        }
        return shuffledDeck
    }

    dispenseTiles(deck, players){
        for(let i=1; i<=Object.keys(players).length; i++){
            for(let j=0; j<7; j++){
                const arr = deck.pop()
                players['player'+i].hand.push(arr)
                players['player'+i].count[arr[0]]++
                players['player'+i].count[arr[1]]++
            }
        }
    }

    updateTiles(tile){
        this.tile  = [tile[0], tile[1]]
    }

    updateCoords(coords){
        this.coords.coords.holderLeft = (coords.holderLeft.x === null && coords.holderLeft.y === null) ? {x:coords.startPosition.x - 40, y: coords.startPosition.y} : {x:coords.holderLeft.x-40, y:coords.holderLeft.y}
        this.coords.coords.holderRight = (coords.holderRight.x === null && coords.holderRight.y === null) ? {x:coords.startPosition.x + 40, y: coords.startPosition.y} : {x:coords.holderRight.x+40, y:coords.holderRight.y}
    }

    startGame(players, setTurns, tile, updateCoords, updateTiles){
        for(let i=1; i<=Object.keys(players).length; i++){
            for(let j=0; j<players['player'+i].hand.length; j++){
                if(players['player'+i].hand[j][0] == tile[0] && players['player'+i].hand[j][1] == tile[1]){
                    let playerArr = Object.keys(players)
                    let player = (i == 0) ? playerArr[0] : playerArr[i-1]
                    players['player'+i].hand.splice(j, 1)
                    this.count[tile[0]]++
                    this.count[tile[1]]++
                    updateCoords(this.coords.coords)
                    updateTiles(tile)
                    setTurns(players, playerArr.indexOf(player), 1, tile)
                }
            }
        }
    }

    setTurns(players, index, num, tile){
        if(players[`player${index+1}`].getTurn() === undefined){
            players[`player${index+1}`].setTurn(num)
            this.setTurns(players, index = (index >= 3) ? 0 : index+1, num+1, tile) 
        }else{
            this.doTurn(this.changeTurn(this.turn, players), players, tile)
        }
    }

    doTurn(turn, players, tile){
        turn = (turn > 4) ? 1 : turn
        if(this.turn !== players[`player${turn}`].getTurn()){
            this.doTurn(turn+1, players, tile)
            return
        }if(players[`player${turn}`].human === true){
            console.log("Ready for Human Player")
        } else 
            players[`player${turn}`].computerAI(this.count, tile)
    }

    changeTurn(turn, players){
        this.turn = (turn >= 4) ? 1 : turn+1
        return this.turn
    }
}

class Player{
    constructor(human){
        this.hand = []
        this.human = human
        this.count = [0,0,0,0,0,0,0,0,0,0]
    }

    setTurn(playerNum){
        this.turn = playerNum
    }

    getTurn(){
        return this.turn
    }
    //Gotta fix
    computerAI(count, tile){
        const play = (tile[0] >= tile[1]) ? tile[0] : tile[1]
        const measure = (count[tile[0]] >= count[tile[1]]) ? count[tile[0]] : count[tile[1]]
        if(measure)
            var possible = this.hand.filter(function(value){
                if(value[0] === play || value[1] === play)
                    return value
            })
            if(possible)
                console.log(possible)
                var x = possible.reduce(function(acc, cur){
                    if((cur[0] > acc  && cur[0] !== play) || (cur[1] > acc && cur[1] !== play))
                        return cur
                    else
                        return acc
                })
                console.log(x)
    }
}