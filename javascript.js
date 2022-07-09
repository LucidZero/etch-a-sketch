
/* 
Inside etchBlocksBoxElement generate a grid of tiles generated based on the amount of tiles user wants.

Make limit for amount user can input a 100 x 100.
User input can range from 1 to 100.
Make an option for user to select black or rainbow colors.

Rainbow colors implement by making it on hover change background color of the tile and increase next color
by certain amount. 
*/

let etchTilesBox = document.querySelector("#etchTilesBoxElement");
let inputTiles =16;
let widthHeightTile;
let tileHover = document.querySelector(".tile");


generateTiles(inputTiles)


function checkIfUserInputValid(inputTiles){
if (inputTiles<=100){
    if (inputTiles<1){

        etchTilesBox.textContent = ""; 
        inputTiles=1;
        generateTiles(inputTiles);
     } else if (inputTiles<=100){

        etchTilesBox.textContent = ""; 
        generateTiles(inputTiles);
    } else{
        document.getElementById('chooseTiles').value = "100";
    }
}
}
function generateTiles(inputTiles){

let numberOfTiles = inputTiles * inputTiles;

for (i=0; i <numberOfTiles; i++){
const div = document.createElement("div");
div.classList.add("tile");
div.style.width = (900 / inputTiles) - 2 + "px";
div.style.height = (900 / inputTiles) - 2 + "px";
document.querySelector("#etchTilesBoxElement").appendChild(div);
}
}


etchTilesBox.addEventListener('mouseover', tileHovering);



let rainbowColors = 60;
let hues = 30;
let blues = 210;
let h = 380;

/*my red cm blue cy greem */
function tileHovering() {
    
    
    if ( rainbowColors > 200) {
        rainbowColors = 60;
        hues = 30;
        blues = 210;
    } 
    let colorPickerValue = document.getElementById('colorPicker').value;
    
    if (colorPickerValue === "bandw"){
        rainbowColors +=10;
            document.querySelector(".tile:hover").style.backgroundColor = "rgb(" + rainbowColors + "," + rainbowColors + "," + rainbowColors + ")";
        
        
    }  else if (colorPickerValue === "gandm"){
        rainbowColors +=10;
        hues +=10;
        blues -=10;
        document.querySelector(".tile:hover").style.backgroundColor = "rgb(" + rainbowColors + "," + blues + "," + hues + ")";
    } else if (colorPickerValue === "rainbow"){
        h -= 20;
        if (h<=0){
            h=360;
        }

        document.querySelector(".tile:hover").style.backgroundColor = "hsl("+ h +", 100%, 50%)";

   
    } else{
        document.querySelector(".tile:hover").style.backgroundColor = colorPickerValue;
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

