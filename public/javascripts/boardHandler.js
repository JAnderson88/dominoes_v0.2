// function drawTile(ctx, x, y, width, height, color, boardCoord, state){
//     ctx.beginPath()
//     ctx.lineWidth = 1
//     ctx.strokeStyle = color
//     ctx.rect(x, y, width, height)
//     ctx.stroke()
//     if(state === 'startPosition')
//         boardCoord.startPosition = {x,y}
//     if(state === 'holderRight')
//         boardCoord.holderRight = {x,y}
//     if(state === 'holderLeft')
//         boardCoord.holderLeft = {x,y}
//     if(state === 'holderAltRight')
//         boardCoord.holderAltRight = {x,y}
//     if(state === 'holderAltLeft')
//         boardCoord.holderAltLeft = {x,y}
// }

// function drawTileImage(ctx, x, y, width, height, src){
//     return new Promise(function(resolve, reject){
//         let img = new Image()
//         // img.style.transform = 'rotate(90deg)'
//         img.onload = function(){
//             console.log("Loaded")
//             ctx.save()
//             // ctx.rotate(90*Math.PI/180)
//             ctx.drawImage(this, x, y, img.width, img.height, x, y, 25, 15)
//             ctx.restore()
//         }
//         img.onerror = function(){
//             console.log("error")
//         }
//         img.src = src
//     })
// }

