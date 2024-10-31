
let juego1;  // Declaración global de juego1
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let cronometro = 0;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let imgFichaJugador1 = "./img/robotPrueba1.png";
let imgFichaJugador2 = "./img/robot_circ2.png";
let imgFicha1 = "./img/robotPrueba1.png";
let imgFicha2 = "./img/robot_circ2.png";
let imgFicha3 = "./img/robot_circ3.png";
let imgFicha4 = "./img/robot_circ4.png";
let imgFicha5 = "./img/robot_circ5.png";
let imgFicha6 = "./img/robot_circ6.png";
let ganador = document.querySelector("#ganador");
let titulo = document.querySelector("#turno");
let nombre1=document.querySelector("#titulo1");
let nombre2=document.querySelector("#titulo2");





// Crea un array para los receptores




document.querySelector('#menuGame').addEventListener('click',()=>{
    //reiniciarJuego();
    document.querySelector('.canvas-form').style.display="flex";
    document.querySelector('.canvas').style.display="none";
});
//reiniciar Juego
document.querySelector('#restartGame').addEventListener('click',()=>{
    for( let i = juego1.cantFichas()-1; i>=0; i--){
        juego1.getFicha(i).posInicial();
    }
    juego1.draw();
});
//nombre de los jugadores
document.querySelector('#namePlayer1').addEventListener('keyup', ()=>{
    juego1.setNombre(document.querySelector('#namePlayer1').value);
});
document.querySelector('#namePlayer2').addEventListener('keyup', ()=>{
    jugador2.setNombre(document.querySelector('#namePlayer2').value);
});

//juegar 4 en linea
document.querySelector('#play-canvas').addEventListener('click',()=>{
    document.querySelector('.section-image').style.display="none";
    document.querySelector('.canvas-form').style.display="flex";
});
document.querySelector("#play-game").addEventListener('click',()=>{
    document.querySelector('.canvas').style.display="flex";
    document.querySelector('.canvas-form').style.display="none";
    //reiniciarJuego();
});
function seleccionarFichaJugador2(ficha){
    ficha2.style.scale = "1.0"
    ficha4.style.scale = "1.0"
    ficha6.style.scale = "1.0"
    ficha.style.scale = "1.2"
}
function seleccionarFichaJugador1(ficha){
    ficha1.style.scale = "1.0"
    ficha3.style.scale = "1.0"
    ficha5.style.scale = "1.0"
    ficha.style.scale = "1.2"
}
ficha1 = document.querySelector("#ficha1");
ficha2 = document.querySelector("#ficha2");
ficha3 = document.querySelector("#ficha3");
ficha4 = document.querySelector("#ficha4");
ficha5 = document.querySelector("#ficha5");
ficha6 = document.querySelector("#ficha6");

document.addEventListener("DOMContentLoaded", () => {
ficha1.addEventListener('click',()=>{
   
    imgFichaJugador1 = imgFicha1;
    seleccionarFichaJugador1(ficha1);
    
})
ficha2.addEventListener('click',()=>{
    imgFichaJugador2 = imgFicha2;
    seleccionarFichaJugador2(ficha2);
})

ficha3.addEventListener('click',()=>{
    
    imgFichaJugador1 = imgFicha3;
    seleccionarFichaJugador1(ficha3);
})
ficha4.addEventListener('click',()=>{

    imgFichaJugador2 = imgFicha4;
    seleccionarFichaJugador2(ficha4);
    
})
ficha5.addEventListener('click',()=>{
    imgFichaJugador1 = imgFicha5;
    seleccionarFichaJugador1(ficha5);
    
})
ficha6.addEventListener('click',()=>{
    imgFichaJugador2 = imgFicha6;
    seleccionarFichaJugador2(ficha6);
})
});
document.addEventListener("DOMContentLoaded", () => {
document.querySelector("#linea4").addEventListener('click',()=>{
    cantEnLinea = 4;
    numColumn = 7;
    numFilas = 6;
    TAMESPACIO = 60;
    cargarJuego();
    //reiniciarJuego();
})
document.querySelector('#linea5').addEventListener('click',()=>{
    cantEnLinea = 5;
    numColumn = 8;
    numFilas = 7;
    TAMESPACIO = 50;   
    cargarJuego();
    //reiniciarJuego();
})

document.querySelector('#linea6').addEventListener('click',()=>{
    cantEnLinea = 6;
    numColumn = 9;
    numFilas = 8;
    TAMESPACIO = 45;
    cargarJuego();
    //reiniciarJuego();
})
document.querySelector('#linea7').addEventListener('click',()=>{
    cantEnLinea = 7;
    numColumn = 10;
    numFilas = 9;
    TAMESPACIO = 40;
    cargarJuego();
    //reiniciarJuego();
})
});
let cantEnLinea = 4;
let numColumn = 7;
let numFilas = 6;
let TAMESPACIO = 70;

cargarJuego();

//funcion de cronometro
function iniciarTiempo(boolean){
    let element = document.getElementById("tiempo");

    //setea la cantidad de minutos
    let cantminutos = 3;
    //se pasa a segundos
    let tiempo = cantminutos * 60;
    //si se recibio un true
    if(boolean){
        cronometro = setInterval(()=>{
            let minutos = Math.floor(tiempo / 60);
            let segundos = tiempo % 60;
            //si segundos es < 10 coloca un 0 adelante
            segundos = segundos < 10 ? '0' + segundos : segundos;
            element.innerHTML = `${minutos}:${segundos}`;
            //si llega a cero finaliza el juego como Empate
           
            if(minutos == 0 && segundos == 0){
                clearInterval();
                finalizarJuegoEmpate();

            }
            else{
                tiempo--;
           
            }
        }, 1000);
    }
    else{
        //si se recibe un false termina el intervalo
        clearInterval(cronometro);
    }
}
function cambiarTurno(){
   let turno= juego1.getTurno();
   titulo.innerHTML = "Turno de " + juego1.getJugadorEnTurno(turno);
}
function finalizarJuego(){
    //frena el tiempo
    iniciarTiempo(false);
    titulo.style.display ="none";
    ganador.style.display = "block";
    ganador.innerHTML = "Gano "+ juego1.getJugadorEnTurno(juego1.getTurno());
    
    //setea a las fichas para q no se puedan mover  
  
}

function finalizarJuegoEmpate(){
    //frena el tiempo
    iniciarTiempo(false);
    titulo.style.display ="none";
    ganador.style.display = "block";
    ganador.innerHTML = `Empate, Se acabo el tiempo`;
    //setea a las fichas para q no se puedan mover
    for(let i = 0; i < fichasJugador1.length; i++){
        fichasJugador1[i].ponerEnTablero(false);
        fichasJugador2[i].ponerEnTablero(false);
    }
}

canvas.addEventListener("mousedown", (event) => {
    const rect = canvas.getBoundingClientRect(); // Obtén las coordenadas del canvas en la pantalla
    let mouseX = event.clientX - rect.left;      // Ajusta la posición X
    let mouseY = event.clientY - rect.top;       // Ajusta la posición Y

    
    
    //recore todas las fichas         
    for(let i = juego1.cantFichas()-1; i>=0; i--){
        let ficha = juego1.getFicha(i);
        //le pregunta a ficha si esta clickeada
        if(ficha.isPointInside(mouseX,mouseY) && ficha.getJugador()=== juego1.getTurno()){
            //setea la ficha actual
            juego1.setFichaActual(ficha);
            break;
        }
    }
    
})
canvas.addEventListener("mousemove", (event) => {
    // Si hay una ficha agarrada
    if (juego1.getFichaActual() != null) {
        const rect = canvas.getBoundingClientRect(); // Vuelve a obtener el rectángulo del canvas
        let mouseX = event.clientX - rect.left;      // Ajusta la posición X
        let mouseY = event.clientY - rect.top;       // Ajusta la posición Y

        // Mueve la ficha de lugar y redibuja todo
        let fichaActual = juego1.getFichaActual();
        fichaActual.move(mouseX, mouseY); // Usa mouseX y mouseY ajustados
        juego1.draw();
    }
});
canvas.addEventListener("mouseup", () =>{
    //si hay una ficha agarrada
    if(juego1.getFichaActual()!=null){
        //se obtiene la pos de la ficha
        let x = juego1.getFichaActual().getPosX();
        let y = juego1.getFichaActual().getPosY();
       
        //recorro todos los dropzone
        
        let gano =juego1.tirarFicha(x,y);
        cambiarTurno();
        if(gano=== -2){
           
                console.log("Este mensaje aparece después de 2 segundos");
                finalizarJuego(); 
        }
        juego1.draw(); 
        
        //si la ficha no estaba en ningun receptor vuelve a su pos inicial
        if(juego1.getFichaActual() != null){
            juego1.getFichaActual().posInicial();
            juego1.setFichaActual(null) ;
            juego1.draw();
        }
    }
})
canvas.addEventListener("mouseleave", ()=>{
    //si el mouse sale del canvas devuelve la ficha actual a su pos inicial
    if(juego1.getFichaActual()!=null){
        juego1.getFichaActual().posInicial();
        juego1.setFichaActual(null) ;
        
        juego1.draw();
    }
})

function cargarJuego(){
    let tablero7= new Tablero(numFilas, numColumn, ctx,cantEnLinea,TAMESPACIO);
    juego1 = new Juego(tablero7, ctx, "juan", "pedro", imgFichaJugador1, imgFichaJugador2);
    juego1.addFichas();
    juego1.draw();
    iniciarTiempo(true);
    cambiarTurno();
    return juego1;
}
