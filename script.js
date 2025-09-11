function createGrid(side) {
    let container = document.querySelector('#container');

    totalArea = side * side;
    for (let i = 0; i < totalArea; i++) {
        let div = document.createElement('div');
        div.style.border = '2px solid black';
        div.style.height = '50px';
        div.style['flex-basis'] = `calc(100% / ${side})`;
        container.appendChild(div);
    }

    container.addEventListener('mouseover', (event) => {
        if (event.target != container) {
            event.target.style.backgroundColor = 'red';
        }
    })

    container.addEventListener('mouseout', (event) => {
        if (event.target != container) {
            event.target.style.backgroundColor = '';
        }
    })
}

createGrid(16);