
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



if (inputTiles<=100){
generateTiles();
} else{
    /*in input slot make it say "only tiles between 1 and 100" */
}
function generateTiles(){
for (i=0; i <numberOfTiles; i++){
/*generate a div class="tile" that will have a width and height of widthHeightTile
that on hover change color
*/

const div = document.createElement("div");
div.classList.add("tile");
div.style.width = (225 / inputTiles) -0.5 + "px";
div.style.height = (225 / inputTiles) -0.5 + "px";
document.querySelector("#etchTilesBoxElement").appendChild(div);
};

};







/* ""= VH / userinput" to generate width and height of boxes
IT DOESN'T WORK WELL LEAVING IN FOR LATER IMPLEMENTATION
*/
function viewportWidthHeight(){
    let viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let oneTenthOfViewportHeight = viewPortHeight / 10; 
    console.log(oneTenthOfViewportHeight)
    const etchTilesBox = document.querySelector("#etchTilesBoxElement"); 
    widthHeightTile = (viewPortHeight - oneTenthOfViewportHeight) / inputTiles;
    etchTilesBox.style.width = ((viewPortHeight - oneTenthOfViewportHeight) + inputTiles/2) + "px";
    etchTilesBox.style.height = ((viewPortHeight - oneTenthOfViewportHeight) + inputTiles/2)+ "px";
    return widthHeightTile;
}; 


