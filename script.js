
const container = document.getElementById('container')
const sketch_width = 512;
const sketch_height = 512;
const side_length = 4;
const square_width = sketch_width / side_length;
const square_height = sketch_height / side_length;


createGrid();
createResetButton();



function createGrid() {
    
    let sketchArea = document.createElement('div');
    sketchArea.setAttribute('id', 'sketchArea');

    sketchArea.style.width = sketch_width;
    sketchArea.style.height = sketch_height;
    
    for (let row = 0; row < side_length; row++){
        for (let col = 0; col < side_length; col++){
            let newSquare = document.createElement('div');
            newSquare.classList.add('pixel');
            newSquare.style.width = square_width;
            newSquare.style.height = square_height;
            newSquare.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'black';
            });
            sketchArea.appendChild(newSquare);
        }
    }

    container.appendChild(sketchArea);


}

function createResetButton() {
    let resetButton = document.createElement('button');
    resetButton.setAttribute('id', 'resetButton');

    resetButton.innerText = 'RESET';

    container.appendChild(resetButton);


}
