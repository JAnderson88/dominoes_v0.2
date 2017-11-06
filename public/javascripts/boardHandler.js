function drawHolder(boardCoord, board, dir, tile){
    const div = document.createElement('img')
    div.style.position = "relative"
    div.style.display = "inline-block"
    div.style.top =  boardCoord.coords.startPosition.y + 'px'
    div.style.left =boardCoord.coords.startPosition.x + 'px'
    div.style.width = boardCoord.coords.tileDim.width + 'px'
    div.style.height = boardCoord.coords.tileDim.height + 'px'
    div.style.transform = (dir == "long") ? "rotate(90deg)" : "rotate(0deg)"
    div.src = `images/d_${tile[0]}_${tile[1]}.png`
    board.appendChild(div)
}

function placeImage(div, tile){

}