class Game{
    constructor(board, size, turn = null){
        this.board = board
        this.size = size
        this.deck = this.shuffleDeck(this.createDeck(), this.size)
        this.players = {
            player1: new Player,
            player2: new Player,
            player3: new Player,
            player4: new Player
        }
        this.dispenseTiles(this.deck, this.players)
        this.turn = this.startGame(this.players)
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
                players['player'+i].hand.push(deck.pop())
            }
        }
    }

    startGame(players){
        let player;
        for(let i=1; i<=Object.keys(players).length; i++){
            for(let j=0; j<players['player'+i].hand.length; j++){
                if(players['player'+i].hand[j][0] == 0 && players['player'+i].hand[j][1] == 0){
                    player = Object.keys(players)
                    // console.log(player)
                    players['player'+i].hand.splice(j, 1)
                    return (i == 0) ? player[0] : player[i-1]
                }
            }
        }
        
    }
}

class Player{
    constructor(){
        this.hand = []
    }

    setPlayer(playerNum){

    }
}