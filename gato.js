let jugadoruno = true;
let cells = document.getElementsByClassName ('cell')

for (let index = 0; index < cells.length; index++) {
    cells[index].addEventListener('click', userMove);
}
/* aqui comence a validar las posiciones con las que unno puede ganar*/
function userMove(e) {
 let cellvalue = e.target.innerHTML;
 if (!cellvalue.length) {
    e.target.innerHTML = 'X'
    jugadoruno = !jugadoruno;
//jugadoruno? 'X':'O';
    CheckLine(0,1,2);
    CheckLine(3,4,5);
    CheckLine(6,7,8);
    CheckLine(0,3,6);
    CheckLine(1,4,7);
    CheckLine(2,5,8);
    CheckLine(0,4,8);
    CheckLine(6,4,2);
 }
  maquina()
}

function CheckLine(c1,c2,c3) {
    console.log("llega");
    console.log(cells[c1].innerHTML);                                                        //el innerhtml lo que hace es que me duvuelve o me tira(o me establece la sintaxis del html) lo que hay en el html
    console.log(cells[c2].innerHTML);
    console.log(cells[c3].innerHTML);
    if (cells[c1].innerHTML != "" && cells[c1].innerHTML === cells[c2].innerHTML &&cells[c2].innerHTML === cells[c3].innerHTML) {
        showWinner(cells[c1].innerHTML);
    }
}
/* aqui me dice quien gana */ 
function showWinner(player1) {
 document.querySelector('#Resultado').innerHTML = player1 + '  GANADOR';
}

// esto es para que la maquina mueva o marque por ella misma//
function maquina() {
    //    for (let index = 0; index < cells.length; index++) {
        //        cells[index].addEventListener('click',()=> {
            //            if (moverse[inndex].textContent === '') {
                // moverse[index].innerHTML = "X";
                //               console.log(moverse[index].textContent);
                
                
                //         }
                //     });
                
                
                // }
                //aqui lo  que voy hacer es que si esta vacio puede marcar y si esta ocupado no puede mmarcar
                //                 let bombillo=true
                // while (bombillo==true) {
                    
                    //     let moverse =Math.floor(Math.random() * 9);
                    //     if (cells[moverse].innerHTML=='') {
//         console.log(cells)
//         cells[moverse].innerHTML='O'    
//         bombillo=falso 
//     }
// }

}
  const moverse= document.querySelectorAll('.cells');
  const jugadormaquina= 'X';
  for (let index = 0; index < .length; index++) {
   
    
  }             
                
                
                
                




