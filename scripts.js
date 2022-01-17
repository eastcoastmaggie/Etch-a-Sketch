const DEFAULT_SIZE = 16;
const FILL_COLOR = 'black';
const container = document.createElement('div');
container.classList.add('container');
let fillColor = FILL_COLOR;
let useRainbowColor = false;
let rainbowHue = 0;
let saturation = 100;
let luminance = 50;



const colorSelector = document.querySelector('#color-selector');
colorSelector.addEventListener("click", function(e){
    useRainbowColor = false;
    fillColor = "rgb("+ Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    e.target.style.backgroundColor = fillColor;
});
const rainbowButton = document.querySelector("#rainbow-color");
rainbowButton.addEventListener("click", function(e){
    useRainbowColor = true;
    console.log('rainbows')
});


// make a div
function createDiv(classValue){
    let cellDiv = document.createElement('div');
    cellDiv.classList.add(classValue);
    cellDiv.addEventListener("mouseover", fillIn);
    return cellDiv;
}

// add colour to div
function fillIn(e){
    if(useRainbowColor == false){
        e.target.style.backgroundColor = fillColor;
    } else {
        e.target.style.backgroundColor = `hsl(${rainbowHue}, ${saturation}%, ${luminance}%)`;
        console.log(`hsl(${rainbowHue}, ${saturation}%, ${luminance}%)`);
        if (rainbowHue < 360){
            rainbowHue += 5;
        } else {
            rainbowHue = 0;
        }
    }
}

// create new grid
function buildGrid(gridSize){ 

    // make grid of divs
    for (let row = 0; row < gridSize; row++){
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        for(let column = 0; column < gridSize; column++){
            columnDiv = createDiv('cell');
            rowDiv.appendChild(columnDiv);
        }
        container.appendChild(rowDiv);
    }
}
function startNew(){
console.log();
    while(container.firstElementChild){
        container.firstElementChild.remove();
    }
    let gridSize = DEFAULT_SIZE;
    
    // if no size is specified prompt the user.
    if(typeof arguments[0] == "object"){
        gridSize = prompt("Enter size of grid (between 1-100)", gridSize);
    } else {
        gridSize = arguments[0];
    }
    if (Number(gridSize) == undefined ||Number(gridSize) == NaN || Number(gridSize) < 1 || Number(gridSize) > 100){
        console.log('Error');
        startNew();
    } else{
        buildGrid(gridSize);
        document.body.appendChild(container);
    } 
}

startNew(DEFAULT_SIZE);
const resetButton = document.querySelector('#reset');
 resetButton.addEventListener('click', startNew);