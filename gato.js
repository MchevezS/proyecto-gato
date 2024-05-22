let jugadoruno = true;
let cells = document.getElementsByClassName('cell')
let conteo = 0;

for (let index = 0; index < cells.length; index++) {
    cells[index].addEventListener('click', userMove);
}
/* aqui comence a validar las posiciones con las que unno puede ganar*/
function userMove(e) {
    let cellvalue = e.target.innerHTML;
    if (!cellvalue.length) {
        e.target.innerHTML = 'X'
        conteo = conteo + 2;
        jugadoruno = !jugadoruno;
        //jugadoruno? 'X':'O';
        CheckLine(0, 1, 2);
        CheckLine(3, 4, 5);
        CheckLine(6, 7, 8);
        CheckLine(1, 4, 7);
        CheckLine(0, 3, 6);
        CheckLine(0, 4, 8);
        CheckLine(6, 4, 2);
        CheckLine(2, 5, 8);
    }
    if (ganoYa == false) {
        maquina()
    }
}

let ganoYa = false
let ganadorFigura
function CheckLine(c1, c2, c3) {
    if (cells[c1].innerHTML != "" && cells[c1].innerHTML === cells[c2].innerHTML && cells[c2].innerHTML === cells[c3].innerHTML) {
        ganadorFigura=cells[c1].innerHTML
        showWinner(cells[c1].innerHTML);
        ganoYa = true
    }
    //cells[c1].innerHTML

}
/* aqui me dice quien gana */
function showWinner(player1) {
    if (document.querySelector('#Resultado').innerHTML = player1 + '  GANADOR ') {
        alert(document.querySelector('#Resultado').innerHTML = ganadorFigura + '  GANADOR ')
    }
   
    //document.querySelector('#Resultado').innerHTML = player1 + '  GANADOR ';
    if (conteo>=10) {
        if (cells[c1].innerHTML != cells[c2].innerHTML || cells[c2].innerHTML != cells[c3].innerHTML) {
            alert('empate')
            conteo=0
        }
    }

}

// esto es para que la maquina mueva o marque por ella misma//
function maquina() {
    let bombillo = true
    while (bombillo == true) {
        let moverse = Math.floor(Math.random() * 9);
        console.log('se esta corriendo el ciclo y conteo es ' + conteo);
        if (cells[moverse].innerHTML == '') {
            console.log(cells)
            cells[moverse].innerHTML = 'O'
            bombillo = false
        }
        if (conteo > 8) {
            console.log('esta vivo');
            bombillo = false

        }
    }
}




