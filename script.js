//get refs to sketch area and container element
const container = document.getElementById('container');
const sketchArea = document.getElementById('sketchArea');
//create needed elements
createGrid(4);
createResetButton();

function resizeSketchPad(size) {

    sketchArea.style.width = `${size}px`;
    sketchArea.style.height = `${size}px`; 

}

function resizePixel(side_length) {
    if (side_length > 90) {
        square_width = '9px';
    } else if (side_length > 80) {
        square_width = '11px';
    } else if (side_length > 70) {
        square_width = '12px'
    } else if (side_length > 60) {
        square_width = '15px'
    } else if (side_length > 50) {
        square_width = '18px'
    } else if (side_length > 40) {
        square_width = '22px'
    } else if (side_length > 30) {
        square_width = '30px'
    } else if (side_length > 20) {
        square_width = '45px'
    } else if (side_length > 10) {
        square_width = '90px'
    } 
}

function createGrid(side_length) {


    
    for (let row = 0; row < side_length; row++){
        for (let col = 0; col < side_length; col++){
            let newSquare = document.createElement('div');
            newSquare.classList.add('pixel');
            newSquare.style.width = `${square_width}px`;
            newSquare.style.height = `${square_height}px`;
            newSquare.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'black';
            });
            sketchArea.appendChild(newSquare);
        }
    }



}

function createResetButton() {
    let resetButton = document.createElement('button');
    resetButton.setAttribute('id', 'resetButton');

    resetButton.innerText = 'RESET';
    resetButton.addEventListener('click', reloadGrid(prompt('enter new no. of squares')))

    container.appendChild(resetButton);
}

function reloadGrid(side_length) {

    if (side_length <= 100) {
        createGrid(side_length);
    } else {
        reloadGrid(prompt('enter a number less than 100'));
    }

}