let jugadoruno = true;
let cells = document.getElementsByClassName('cell');
let conteo = 0;
let ganoYa = false;
let ganadorFigura;

for (let index = 0; index < cells.length; index++) {
    cells[index].addEventListener('click', userMove);
}

function userMove(e) {
    let cellvalue = e.target.innerHTML;
    if (!cellvalue.length) {
        e.target.innerHTML = 'X';
        conteo = conteo + 2;
        jugadoruno = !jugadoruno;
        CheckLine(0, 1, 2);
        CheckLine(3, 4, 5);
        CheckLine(6, 7, 8);
        CheckLine(1, 4, 7);
        CheckLine(0, 3, 6);
        CheckLine(0, 4, 8);
        CheckLine(6, 4, 2);
        CheckLine(2, 5, 8);
    }
    if (!ganoYa && !empate()) { 
        maquina();
    }
}

function CheckLine(c1, c2, c3) {
    if (cells[c1].innerHTML != "" && cells[c1].innerHTML === cells[c2].innerHTML && cells[c2].innerHTML === cells[c3].innerHTML) {
        ganadorFigura = cells[c1].innerHTML;
        showWinner(cells[c1].innerHTML);
        ganoYa = true;
    }
}

function showWinner(player1) {
    if (document.querySelector('#Resultado').innerHTML = player1 + '  has ganado ') {
        alert(document.querySelector('#Resultado').innerHTML = ganadorFigura + '  felicidades has ganado 🥳🥳 ');
    }
}

function empate() {
    let vacios = Array.from(cells).filter(estaVacio => estaVacio.innerHTML === "");
    if (vacios.length === 0 && !ganoYa) {
        alert("Empate");
        return true;
    }
    return false;
}

function maquina() {
    let bombillo = true;
    while (bombillo) {
        let moverse = Math.floor(Math.random() * 9);
        if (cells[moverse].innerHTML == '') {
            cells[moverse].innerHTML = 'O';
            bombillo = false;
        }
        if (cells[moverse].innerHTML == '') {
            cells[moverse].innerHTML = 'x';
            bombillo = true;
        }
        if (conteo > 8) {
            bombillo = false;
        }
    }
}
