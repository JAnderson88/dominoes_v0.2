function tileDisplay(hand, deck){
    for(let i=0; i<hand.length; i++){
        let tile = document.createElement("div")
        tile.innerHTML = `<img class="tile" src="images/d_${hand[i][0]}_${hand[i][1]}.png"/>`
        tile.addEventListener('click', function(){
            moveToBoard(this)
        })
        deck.appendChild(tile)
    }
}

function moveToBoard(tile){
    if(tile.classList.value.includes("target")){
        // console.log("Second Click")
        tile.classList.remove("target")
    } else {
        // console.log("First Click")
        tile.classList.add("target")
        
    }
}