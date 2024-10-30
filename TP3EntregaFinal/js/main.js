
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;


let imgFicha1 = "./img/robotPrueba1.png";
let imgFicha2 = "./img/robot_circ6.png";
let imgFicha3 = "./img/robot_circ3.png";
let imgFicha4 = "../img/robot_circ4.png";
let imgFicha5 = "../img/robot_circ5.png";
let imgFicha6 = "../img/robot_circ6.png";
let tablero7= new Tablero(6, 7, ctx,4,80);
let juego1= new Juego(tablero7,ctx,"juan","pedro",imgFicha1,imgFicha2);


function drawJuego(){
    juego1.draw();
}
juego1.addFichas();

drawJuego();



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

// Crea un array para los receptores






