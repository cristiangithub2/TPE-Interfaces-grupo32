class Juego{
    constructor(Tablero,ctx,jugador1,jugador2,img1,img2,){
        this.Tablero=Tablero;
        this.Receptor=this.Tablero.getReceptor();
        this.fichas = []; // Define fichas como un array
        this.ctx=ctx;
        this.turno=1;
        this.cantCells = this.Tablero.getRows() * this.Tablero.getCols();
        this.fichaActual=null;
        this.jugador1=jugador1;
        this.jugador2 = jugador2;
        this.fichaMobimiento=null;
        this.tamañoFicha= this.Tablero.getCuadradoSize()/2.3;
        this.fichaAnimada = null
        this.intervalo = 0;
        this.pos=0;
        this.img1=img1;
        this.img2=img2;
        this.imgFondo = new Image();
        this.imgFondo.src = "./img/fondoFinal.png";
        this.imgFondo.onload = () => {
            this.draw(); // Llama a `draw` una vez que la imagen de fondo está cargada
        };
        this.gano=false;
        
    }
    getTablero(){
        return this.Tablero;
    }
    getImg1(){
        return this.img1;
    }
    getFichaAnimada(){
        return this.fichaAnimada;
    }
    getImg2(){
        return this.img2;
    }
    getJugador1(){
        return this.jugador1;
    }
    getJugador2(){
        return this.jugador2;
    }
    
    setJugador1(texto){
        this.jugador1=texto;
    }
    setJugador2(texto){
        this.jugador2=texto;
    }
    setImage1(img){
        this.img1=img;
    }

    getJugadorEnTurno(turno){
        if(turno===1){
            return this.getJugador1();
        }else{
            return this.getJugador2();
        }
    }
    
    setImage2(img){
        this.img2=img;
    }
    getReceptor(){
        return this.Receptor;
    }
    setFichaActual(ficha){
        this.fichaActual=ficha;
    }
    getFichaActual(){
        return this.fichaActual;
    }
    getTurno(){
        return this.turno;
    }
    setTurno(turno){
        this.turno=turno;
    }
    cantFichas(){
        return this.fichas.length;
    }
    getFicha(i){
        //deberia pasar una copia?? encontraria bien si es clickeada o no?
        return this.fichas[i];
    }

    addFichas(){
        let contador=0;
        for(let i = 0; i< this.cantCells/2;i++){
            this.addFicha(1,contador);
            this.addFicha(2,contador);
           contador+=8;
        }
       
    }
    addFicha(player,cc){
        let posX, posY, color;
        if(player===1){
            posX= 95;
            posY= 400-cc;
            color = "red";
        }else{
            posX = 1050;
            posY = 400-cc;
            color = "blue";
        }
     
        let ficha = new Ficha(posX,posY,this.ctx,this.tamañoFicha,player);
        this.fichas.push(ficha);
      
      
    }

    clearCanvas(){
        ctx.fillStyle = '#739A9C';
        ctx.clearRect(0, 0,canvasWidth,canvasHeight);
    }
    draw() {
        this.clearCanvas();
        this.Receptor.draw();
        if (this.imgFondo.complete) {
            this.ctx.drawImage(this.imgFondo, 0, 0, canvasWidth, canvasHeight);
        }
    
        
        // Cambia esta línea para usar 'this.fichas'
            
        for (let i = 0; i < this.fichas.length; i++) {
      
            if(this.getFicha(i).getJugador()===1){
            this.fichas[i].draw(this.getImg1());
            }else{
                this.fichas[i].draw(this.getImg2());
            }
        }
       
        this.Tablero.draw();
    }
    
    checkWin(row, col) {
        if( this.Tablero.checkGanador(row,col,this.turno)){
          
            return true;
        }else{
            return 0;
        }
           
        ;
    }
    switchPlayer() {
        this.turno = this.turno === 1 ? 2 : 1; // Cambia el turno de jugador
    }
    ganador() {
        return this.gano; // Cambia aquí para que devuelva el estado de ganar
    }
    tirarFicha(x,y){
        
        if(this.Receptor.detectarFicha(x,y)) {

            let col = this.Receptor.colReceptor(x);

            let row=this.Tablero.dropFicha(col,this.fichaActual);
            let posX = this.Tablero.offset_X + col * this.Tablero.getCuadradoSize() + this.Tablero.getCuadradoSize() / 2;
            let posY = this.Tablero.offset_Y + row * this.Tablero.getCuadradoSize() + this.Tablero.getCuadradoSize() / 2;
    
            
            if(row !== -1){
                this.fichaAnimada = this.fichaActual;
                this.fichaActual=null;
                this.pos = 0;
                this.caer(posX,posY);
            }else{
                this.fichaActual.posInicial();
            }

            if(row !== -1){
                if(this.checkWin(row,col)){
                    return -2;
                }else{
                    this.switchPlayer();
                }
            }else{
                this.fichaActual.posInicial();
            }
        }else{
            return -1;

        }
    }
    caer(x,y){
        //comienza un intervalo
        this.intervalo = setInterval(() => {
            this.pos += 1;
            //mueve la ficha sumandole pos
            this.fichaAnimada.move(x,this.fichaAnimada.getY()+this.pos);
            this.draw()
            //cuando llega a espacio del casillero
            if(this.fichaAnimada.getY()>y){
                this.fichaAnimada.move(x,y);
                //termina el intervalo
                clearInterval(this.intervalo);
                if(this.fichaAnimada.getY()===y && this.fichaAnimada.getX()===x){
                    this.revotarFicha(x,y);
                }
                this.draw()
            }
        },10)
    }
    revotarFicha(x,y){
        let posicion = 0;
        this.intervalo2 = setInterval(() => {
            //incrementa la pos en Y hasta cierta altura
            if(this.fichaAnimada.getY()>(y-this.Tablero.cuadradoSize/3)){
                posicion -=0.5;
                this.fichaAnimada.move(x,(this.fichaAnimada.getY()+posicion));
                this.draw()
            }
            else{
                clearInterval(this.intervalo2);
                this.draw()
                this.bajarFicha(x,y);
            }
        },10)
    }
        //mueve la ficha de a poco hacia la posicion
    bajarFicha(x,y){
        this.pos = 0;
        this.intervalo = setInterval(() => {
            this.pos += 0.25;
            this.fichaAnimada.move(x,this.fichaAnimada.getY()+this.pos);
            this.draw()
            if(this.fichaAnimada.getY()>y){
                this.fichaAnimada.move(x+1,y);
                clearInterval(this.intervalo);
                this.draw()
            }
        },20)
    }
    
}