function createGrid(side) {

    let totalArea = side * side;

    for (let i = 0; i < totalArea; i++) {
        let div = document.createElement('div');
        div.style.border = '2px solid black';
        div.style.flexBasis = `calc(100% / ${side})`;
        div.style.aspectRatio = '1 / 1'; // makes height match width
        div.style.opacity = 1;
        container.appendChild(div);
    }
}

function changeGridSize() {
    let sideLength = -1;

    while (sideLength < 0 || sideLength > 100) {
        sideLength = Number(prompt('Enter a number for the amount of squares per side (limit 100): ', 0));
    }

    container.innerHTML = '';
    createGrid(Number(sideLength));
}


let container = document.querySelector('#container');

container.addEventListener('mouseover', (event) => {

    if (event.target != container) {
        let curOpacity = parseFloat(event.target.style.opacity);
        let newOpacity = Math.max(curOpacity - 0.1, 0); // decrease
        event.target.style.opacity = newOpacity;

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
})

container.addEventListener('mouseout', (event) => {
    if (event.target != container) {
        event.target.style.backgroundColor = '';
    }
})


let button = document.querySelector('#btn');
button.addEventListener('click', changeGridSize);