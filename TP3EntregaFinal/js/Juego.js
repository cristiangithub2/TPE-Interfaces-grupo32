class Juego{
    constructor(Tablero,ctx,jugador1,jugador2,img1,img2){
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
        this.tamañoFicha= this.Tablero.getCuadradoSize()/2.5;
        this.fichaAnimada = null
        this.intervalo = 0;
        this.pos=0;
        this.img1=img1;
        this.img2=img2;
        

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
        for(let i = 0; i< this.cantCells/2;i++){
            this.addFicha(1);
            this.addFicha(2);
           
        }
       
    }
    addFicha(player){
        let posX, posY, color;
        if(player===1){
            posX= 95;
            posY= 100;
            color = "red";
        }else{
            posX = 1050;
            posY = 100;
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
        // Cambia esta línea para usar 'this.fichas'
            
        for (let i = 0; i < this.fichas.length; i++) {
      
            if(this.getFicha(i).getJugador()===1){
            this.fichas[i].draw(this.img1);
            }else{
                this.fichas[i].draw(this.img2);
            }
        }
       
        this.Tablero.draw();
    }
    checkWin(row, col) {
        return (
            this.Tablero.checkGanador(row,col,this.turno)
        );
    }
    switchPlayer() {
        this.turno = this.turno === 1 ? 2 : 1; // Cambia el turno de jugador
    }
    tirarFicha(x,y){
        
        if(this.Receptor.detectarFicha(x,y)) {

            let col = this.Receptor.colReceptor(x);

            let row=this.Tablero.dropFicha(col,this.fichaActual);
            console.log(row)
            let posX = this.Tablero.offset_X + col * this.Tablero.getCuadradoSize() + this.Tablero.getCuadradoSize() / 2;
            let posY = this.Tablero.offset_Y + row * this.Tablero.getCuadradoSize() + this.Tablero.getCuadradoSize() / 2;
            //console.log(posX,posY)
           
            if(row !== -1){
                this.fichaAnimada = this.fichaActual;
                this.fichaActual=null;
                this.pos = 0;
                this.caer(posX,posY);
            }else{
                this.fichaActual.posInicial();
            }
            //this.fichaAnimada.move(posX, posY);
            //console.log(col,row)
            //this.fichaMobimiento = this.fichaActual;
            
            if(row !== -1){
                if(this.checkWin(row,col)){
                    console.log("gano el jugador turno");
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