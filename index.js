let color = 'black';
let click = false;

function populateBoard(size) {
    let board = document.querySelector('.board');

    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove()); 

    board.style.gridTemplateColumns = `repeat(${size}, 1fr`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr`;

    let amount = size*size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');

        square.addEventListener('mouseover', colorSquare)

        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

let setSize = document.querySelector('.setSize');

function changeSize(input) {
    if (input >=2 && input <= 100) {
        populateBoard(input);
        if (setSize.textContent !== 'set size') {
            setSize.textContent = 'set size';
        }
    } else  {
       setSize.textContent = 'Value must be between 2 and 100';
    }
}

function colorSquare() {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
    
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white'); 
}

document.querySelector('.board').addEventListener('click', (e) => {
    if (e.target.tagName != "button") {
        click = !click;
        if(click) { 
            document.querySelector('.mode').textContent = "mode: coloring";
        } else {
            document.querySelector('.mode').textContent = "mode: not coloring";
        }
    }
})


