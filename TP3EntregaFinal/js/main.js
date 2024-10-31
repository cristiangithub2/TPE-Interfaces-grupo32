let juego1;  // Declaración global de juego1
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

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







// Crea un array para los receptores




document.querySelector('#menuGame').addEventListener('click',()=>{
    //reiniciarJuego();
    document.querySelector('.canvas-form').style.display="flex";
    document.querySelector('.canvas').style.display="none";
});
//reiniciar Juego
document.querySelector('#restartGame').addEventListener('click',()=>{
    //reiniciarJuego();
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
console.log(imgFichaJugador1 );
console.log(imgFichaJugador2);
document.addEventListener("DOMContentLoaded", () => {
ficha1.addEventListener('click',()=>{
   
    console.log(imgFichaJugador1 );
    imgFichaJugador1 = imgFicha1;
    console.log(imgFichaJugador1);
    seleccionarFichaJugador1(ficha1);
    
})
ficha2.addEventListener('click',()=>{
    console.log(imgFichaJugador2);
    imgFichaJugador2 = imgFicha2;
    console.log(imgFichaJugador2); 
    seleccionarFichaJugador2(ficha2);
   
})
ficha3.addEventListener('click',()=>{
    
    console.log(imgFichaJugador1 );
    imgFichaJugador1 = imgFicha3;
    console.log(imgFichaJugador1 );
   
 
    seleccionarFichaJugador1(ficha3);
})
ficha4.addEventListener('click',()=>{

    console.log(imgFichaJugador2);
    imgFichaJugador2 = imgFicha4;
    console.log(imgFichaJugador2);

    seleccionarFichaJugador2(ficha4);
    
})
ficha5.addEventListener('click',()=>{
    console.log(imgFichaJugador1 );
    imgFichaJugador1 = imgFicha5;
    console.log(imgFichaJugador1 );
    
    
    seleccionarFichaJugador1(ficha5);
    
})
ficha6.addEventListener('click',()=>{
   
        

    console.log(imgFichaJugador2);
    imgFichaJugador2 = imgFicha6;
    console.log(imgFichaJugador2);
    
    
    seleccionarFichaJugador2(ficha6);
    
})
});
console.log(imgFichaJugador1 );
console.log(imgFichaJugador2);
document.addEventListener("DOMContentLoaded", () => {
document.querySelector("#linea4").addEventListener('click',()=>{
    console.log(cantEnLinea);
    cantEnLinea = 4;
    numColumn = 7;
    numFilas = 6;
    TAMESPACIO = 60;
    cargarJuego();
    //reiniciarJuego();
})
document.querySelector('#linea5').addEventListener('click',()=>{
    console.log("entro a #linea5");
    console.log(cantEnLinea);
    cantEnLinea = 5;
    numColumn = 8;
    numFilas = 7;
    TAMESPACIO = 50;   
    console.log(cantEnLinea);
    cargarJuego();
    //reiniciarJuego();
})
console.log(cantEnLinea);
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
let TAMESPACIO = 80;
cargarJuego();


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
        juego1.tirarFicha(x,y);
        juego1.draw(); 
        //si la ficha no estaba en ningun dropzone vuelve a su pos inicial
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
    return juego1;
}

