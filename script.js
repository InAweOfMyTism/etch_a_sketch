const container = document.getElementById('container');
const sketchArea = document.getElementById('sketchArea');

createGrid(4);
createResetButton();

function createSketchPad(size) {

    sketchArea.setAttribute('id', 'sketchArea');
    sketchArea.style.width = `${size}px`;
    sketchArea.style.height = `${size}px`; 


}

function createGrid(side_length) {

    

    let square_width = side_length;
    let square_height = side_length;


    
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
        reload(prompt('enter a number less than 100'));
    }

}