class Juego{
    constructor(Tablero,ctx,jugador1,jugador2){
        this.Tablero=Tablero;
        this.Receptor=this.Tablero.getReceptor();
        this.fichas = []; // Define fichas como un array
        this.ctx=ctx;
        this.turno=1;
        this.cantCells = this.Tablero.getRows() * this.Tablero.getCols();
        this.fichaActual=null;
        this.jugador1=jugador1;
        this.jugador2 = jugador2;
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
            posX= 200;
            posY= 100;
            color = "red";
        }else{
            posX = 900;
            posY = 100;
            color = "blue";
        }
     
        let ficha = new Ficha(posX,posY, color,this.ctx,30,player);
        this.fichas.push(ficha);
      
    }

    clearCanvas(){
        ctx.fillStyle = '#739A9C';
        ctx.fillRect(0,0,canvasWidth,canvasHeight);
      
    }
    draw() {
        this.clearCanvas();
        this.Tablero.draw();
        this.Receptor.draw();
    
        // Cambia esta línea para usar 'this.fichas'
        for (let i = 0; i < this.fichas.length; i++) {
            this.fichas[i].draw(); // Ahora usa 'this.fichas'
        }
    }
    checkWin(row, col) {
        return (
            this.Tablero.checkHorizontal(row,this.turno) ||   // Verifica horizontal
            this.Tablero.checkVertical(col,this.turno) ||     // Verifica vertical
            this.Tablero.checkDiagonalPrimaria(row, col,this.turno) || // Verifica diagonal primaria
            this.Tablero.checkDiagonalSecundario(row, col,this.turno) // Verifica diagonal secundaria
        );
    }
    switchPlayer() {
        this.turno = this.turno === 1 ? 2 : 1; // Cambia el turno de jugador
    }
    tirarFicha(x,y){
        if(this.Receptor.detectarFicha(x,y)){
            console.log("x para calcualar colReceptor"+x);
            let col=this.Receptor.colReceptor(x);
            console.log("Columna calculada:", col); // Agrega esto
            let row=this.Tablero.dropFicha(col,this.turno);
            console.log(row +"esta calcula row")
            if(row != -1){
                if(this.checkWin(row,col)){
                    console.log("gano el jugador turno");
                }else{
                    this.switchPlayer();
                    this.fichaActual=null;
                }
            }else{
                this.fichaActual.posInicial();
            }
        }else{
            return -1;

        }
    }
}