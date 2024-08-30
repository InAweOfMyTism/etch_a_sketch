/* 
1. add 16 32px x 32px white squares to grid on load
    1a. get sketch area element from doc
    1b. divide sketch area size by 4 to get square size
    1c. loop 0-15 
        i. create each square
        ii. add the event listener to each square for hover to turn it black
        iii. append square as a child of sketch 
    1d.
2. reset (change all color backgrounds to white) when button is clicked
    2a. remove all children from sketch area
    2b. repopulate
*/

//get info

    //get sketch element and button element
//divide size of button element by 4 to get square size

const sketchArea = document.getElementById('sketch-area');
const resetBtn = document.getElementById('reset-btn');




//create grid
createGrid();
//add listener to reset button

    //remove squares
    //add new squares

function createGrid() {
    // loop from 0 to 15
    //create element
    //add event listener for hover event
    //add draw function to EL

    for (let i = 0; i < 16; i++){
        let squareArea = document.createElement('div');
        squareArea.classList.add('square');
        squareArea.addEventListener('mouseover', draw(squareArea));
        sketchArea.appendChild(squareArea);
    }
    
}

function draw(area) {
    //change background color to black
    area.style.backgroundColor = 'black';
}

function clear() {
    //remove all squares
}