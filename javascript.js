
/* 
Inside etchBlocksBoxElement generate a grid of tiles generated based on the amount of tiles user wants.

Make limit for amount user can input a 100 x 100.
User input can range from 1 to 100.
Make an option for user to select black or rainbow colors.

Rainbow colors implement by making it on hover change background color of the tile and increase next color
by certain amount. 
*/

let etchTilesBox = document.querySelector("#etchTilesBoxElement");
let inputTiles = 16;
let numberOfTiles = inputTiles * inputTiles;
let widthHeightTile;
let tileHover = document.querySelector(".tile");





if (inputTiles<=100){
    generateTiles();
    } else{
        /*in input slot make it say "only tiles between 1 and 100" */
    }

/*generate a div class="tile" that will have a width and height of widthHeightTile
that on hover change color
*/
function generateTiles(){
for (i=0; i <numberOfTiles; i++){
const div = document.createElement("div");
div.classList.add("tile");
div.style.width = (320 / inputTiles) - 0.8 + "px";
div.style.height = (320 / inputTiles) - 0.8 + "px";
document.querySelector("#etchTilesBoxElement").appendChild(div);
}
}


etchTilesBox.addEventListener('mouseover', tileHovering);


function tileHovering(evt) {
    if (evt.target.nodeName === "div")
        console.log("Responding")
     else {
        console.log("not responding")
    }
}




/*function tileHovering(){
document.querySelector(".tile").onmouseover = function() {mouseOver()};
document.querySelector(".tile").onmouseout = function() {mouseOut()};
        
function mouseOver() {
    document.querySelector(".tile").style.backgroundColor = "red";
}
        
function mouseOut() {
    document.querySelector(".tile").style.backgroundColor = "white";
}
}*/

