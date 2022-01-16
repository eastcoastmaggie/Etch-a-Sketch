const DEFAULT_SIZE = 16;
const FILL_COLOR = 'darkblue';
const container = document.createElement('div');
container.classList.add('container');
let fillColor = FILL_COLOR;



    const colorSwatch = document.querySelector('#color-swatch');
    colorSwatch.addEventListener("click", function(e){
        fillColor = "rgb("+ Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        e.target.style.backgroundColor = fillColor;
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
    e.target.style.background = fillColor;
}

// start new image
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
    while(container.firstElementChild){
        container.firstElementChild.remove();
    }

    let gridSize = DEFAULT_SIZE;
    gridSize = prompt("Enter size of grid (between 1-100)", gridSize);
    if (Number(gridSize) == undefined ||Number(gridSize) == NaN || Number(gridSize) < 1 || Number(gridSize) > 100){
        console.log('Error');
        startNew();
    } else{
        buildGrid(gridSize);
        document.body.appendChild(container);
    }
}

startNew();
const resetButton = document.querySelector('#reset');
 resetButton.addEventListener('click', startNew);