
let juego1;  // Declaración global de juego1
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let win= new Audio('./audio/win.mp3')
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let tablero7;
let cronometroInterval;  // Cambia el nombre para mayor claridad
let imgFichaJugador1 ;
let imgFichaJugador2  ;
let imgFicha1 = "./img/robotPrueba1.png";
let imgFicha2 = "./img/robot_circ2.png";
let imgFicha3 = "./img/robot_circ3.png";
let imgFicha4 = "./img/robot_circ4.png";
let imgFicha5 = "./img/robot_circ5.png";
let imgFicha6 = "./img/robot_circ6.png";
let ganador = document.querySelector("#ganador");
let titulo = document.querySelector("#turno");
let jugador1;
let jugador2;
let cantEnLinea ;
let numColumn ;
let numFilas ;
let TAMESPACIO ;
const arrowIndicator = document.getElementById("arrow-indicator");
let fichaSostenida = false; // Activa la flecha al agarrar la ficha
let menu=document.querySelector(".menusGame");



// Crea un array para los receptores




document.querySelector('#menuGame').addEventListener('click',()=>{
    //reiniciarJuego();
    document.querySelector('.canvas-form').style.display="flex";
    document.querySelector('.canvas').style.display="none";
    ganador.style.display = "none";
    menu.style.top= 173 +"px";
    menu.style.left= 70.8+"%";
    iniciarTiempo(false);
    win.pause();
    win.currentTime=0;
});
//reiniciar Juego
document.querySelector('#restartGame').addEventListener('click',()=>{
    iniciarTiempo(false);
    cargarJuego();
    ganador.style.display = "none";
    juego1.draw();
    menu.style.top= 173 +"px";
    menu.style.left= 70.8+"%";
    win.pause();
    win.currentTime=0;
});

//nombre de los jugadores
document.addEventListener("DOMContentLoaded", () => {
document.querySelector('#namePlayer1').addEventListener('keyup', ()=>{
    jugador1=document.querySelector('#namePlayer1').value;
});
document.querySelector('#namePlayer2').addEventListener('keyup', ()=>{
    jugador2=document.querySelector('#namePlayer2').value;
});
});
//juegar 4 en linea
document.querySelector('#play-canvas').addEventListener('click',()=>{
    document.querySelector('.section-image').style.display="none";
    document.querySelector('.canvas-form').style.display="flex";
});
document.querySelector("#play-game").addEventListener('click',()=>{
    if (validarConfiguracionJuego()) {
    document.querySelector('.canvas').style.display="flex";
    document.querySelector('.canvas-form').style.display="none";
    cargarJuego();
    }
    //reiniciarJuego();
});
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn-x-inLine");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Remueve la clase 'active' de todos los botones
            buttons.forEach(btn => btn.classList.remove("active"));
            
            // Agrega la clase 'active' solo al botón clickeado
            this.classList.add("active");
        });
    });
});
function validarConfiguracionJuego() {
    // Variables para verificar que todo esté configurado
    let mensajeError = "";
    let fichaJugador1Seleccionada = imgFichaJugador1 !== '' ;
    let fichaJugador2Seleccionada = imgFichaJugador2 !== '';
    let nombreJugador1Valido = jugador1 && jugador1.trim() !== "";
    let nombreJugador2Valido = jugador2 && jugador2.trim() !== "";
    let modoJuegoSeleccionado = cantEnLinea >= 4;  // Solo se activa si se selecciona un modo

    // Verificar cada campo
    if (!nombreJugador1Valido) {
        mensajeError += "⚠️ Ingrese el nombre del Jugador 1.\n";
    }
    if (!nombreJugador2Valido) {
        mensajeError += "⚠️ Ingrese el nombre del Jugador 2.\n";
    }
    if (imgFichaJugador1 == null) {
        mensajeError += "⚠️ Seleccione una ficha para el Jugador 1.\n";
    }
    if (imgFichaJugador2 == null) {
        mensajeError += "⚠️ Seleccione una ficha para el Jugador 2.\n";
    }
    if (!modoJuegoSeleccionado) {
        mensajeError += "⚠️ Seleccione un modo de juego.\n";
    }

    // Mostrar mensaje de error si falta algo
    if (mensajeError) {
        showNotification(mensajeError);
        return false;  // Evita cargar el juego si falta algo
    }
    return true;  // Todos los campos están completos
}
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.style.display = 'block';
    notification.style.opacity = 1;

    setTimeout(() => {
        notification.style.opacity = 0;
        setTimeout(() => {
            notification.style.display = 'none';
        }, 500);
    }, 2000);
}

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
    seleccionarFichaJugador1(ficha6);
})
});
document.addEventListener("DOMContentLoaded", () => {
document.querySelector("#linea4").addEventListener('click',()=>{
    cantEnLinea = 4;
    numColumn = 7;
    numFilas = 6;
    TAMESPACIO = 70;   
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



//funcion de cronometro
function iniciarTiempo(boolean){
    let element = document.getElementById("tiempo");
    let cantminutos = 3;
    let tiempo = cantminutos * 60;

    if (boolean === true) {
        if (!cronometroInterval) { // Solo iniciar si no está corriendo
            cronometroInterval = setInterval(() => {
                let minutos = Math.floor(tiempo / 60);
                let segundos = tiempo % 60;
                segundos = segundos < 10 ? '0' + segundos : segundos;
                element.innerHTML = `${minutos}:${segundos}`;

                if (tiempo <= 0) {
                    clearInterval(cronometroInterval);
                    finalizarJuegoEmpate();
                } else {
                    tiempo--;
                }
            }, 1000);
        }
    } else {
        clearInterval(cronometroInterval);
        cronometroInterval = null; // Resetear la variable del intervalo
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
    menu.style.top= 360 +"px";
    menu.style.left= 43.8+"%";

    
    //setea a las fichas para q no se puedan mover  
  
}

function finalizarJuegoEmpate(){
    //frena el tiempo
    iniciarTiempo(false);
    titulo.style.display ="none";
    ganador.style.display = "block";
    ganador.innerHTML = `Empate, Se acabo el tiempo`;
    menu.style.top= 360 +"px";
    menu.style.left= 43.8+"%";
}

canvas.addEventListener("mousedown", (event) => {
    const rect = canvas.getBoundingClientRect(); // Obtén las coordenadas del canvas en la pantalla
    let mouseX = event.clientX - rect.left;      // Ajusta la posición X
    let mouseY = event.clientY - rect.top;       // Ajusta la posición Y

    fichaSostenida = true; // Activa la flecha al agarrar la ficha
    
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
        const x = event.clientX - canvas.getBoundingClientRect().left;
        const col = juego1.Receptor.colReceptor(x); //
        if (fichaSostenida) { // Solo muestra la flecha cuando la ficha esté agarrada
            console.log("pos x recetor"+juego1.Receptor.getPosX()+ col * juego1.Receptor.getCellSize()+ juego1.Receptor.getCellSize()*2)
            console.log("boca" )
            arrowIndicator.style.display = "block";
            if(juego1.getTablero().getCantLineas() === 4){
            arrowIndicator.style.left = juego1.Receptor.getPosX() + col * juego1.Receptor.getCellSize()+ juego1.Receptor.getCellSize()*2 + "px";
            arrowIndicator.style.top = rect.top + juego1.Receptor.getPosY() - arrowIndicator.offsetHeight +juego1.Receptor.getCellSize() + 10 + "px";
            }
            if(juego1.getTablero().getCantLineas() === 5){
                arrowIndicator.style.left = juego1.Receptor.getPosX() + col * juego1.Receptor.getCellSize()+ juego1.Receptor.getCellSize()*2+ 27 + "px";
                arrowIndicator.style.top = rect.top + juego1.Receptor.getPosY() - arrowIndicator.offsetHeight +juego1.Receptor.getCellSize() + 40 + "px";
            }
            if(juego1.getTablero().getCantLineas() === 6){
                arrowIndicator.style.left = juego1.Receptor.getPosX() + col * juego1.Receptor.getCellSize()+ juego1.Receptor.getCellSize()*2+ 37 + "px";
                arrowIndicator.style.top = rect.top + juego1.Receptor.getPosY() - arrowIndicator.offsetHeight +juego1.Receptor.getCellSize() + 42 + "px";
            }
            if(juego1.getTablero().getCantLineas() === 7){
                arrowIndicator.style.left = juego1.Receptor.getPosX() + col * juego1.Receptor.getCellSize()+ juego1.Receptor.getCellSize()*2+ 47 + "px";
                arrowIndicator.style.top = rect.top + juego1.Receptor.getPosY() - arrowIndicator.offsetHeight +juego1.Receptor.getCellSize() + 45 + "px";
            }
        } else {
            arrowIndicator.style.display = "none";
        }
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
    fichaSostenida = false;
    arrowIndicator.style.display = "none"; // Oculta la flecha al soltar la ficha
    if(juego1.getFichaActual()!=null){
        //se obtiene la pos de la ficha
        let x = juego1.getFichaActual().getPosX();
        let y = juego1.getFichaActual().getPosY();
       console.log(juego1.getFichaActual().getPosX() )
        //recorro todos los dropzone
        
        let gano =juego1.tirarFicha(x,y);
        cambiarTurno();
        if(gano=== -2){
            win.play();
                
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
    juego1 = new Juego(tablero7, ctx, jugador1, jugador2, imgFichaJugador1, imgFichaJugador2);
    juego1.addFichas();
    juego1.draw();
    iniciarTiempo(true);
    cambiarTurno();
    return juego1;
}
