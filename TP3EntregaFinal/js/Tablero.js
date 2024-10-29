class Tablero {
    constructor(rows, cols, ctx,cantLineas,cuadradoSize) {
        this.rows = rows;       // Número de filas
        this.cols = cols;       // Número de columnas
        this.ctx = ctx;         // Contexto del canvas
        this.matriz = []; //logica
        this.cuadrados=[];    //dibujo
        this.offset_X = (ctx.canvas.width - cols * cuadradoSize) / 2; // Centrado horizontal
        this.offset_Y = ctx.canvas.height - (rows * cuadradoSize) - 20; // Posicionado cerca del fondo
        this.receptor = new Receptor(this.cols, this.offset_X, this.offset_Y - cuadradoSize, cuadradoSize, this.ctx);
        this.cantLineas= cantLineas;
        this.cuadradoSize=cuadradoSize;
        this.imgCuadrado= "./img/cuadradoImg.png";
    }
    getReceptor() {
        return this.receptor;
    }
    getCuadradoSize(){
        return this.cuadradoSize;
    }
    

    cargarTablero(){

        let posicionTableroX = this.offset_X;
        let posicionTableroY = this.offset_Y;
        let widthMatriz=this.cols* this.cuadradoSize;
        let heightMatriz=this.rows*this.cuadradoSize;

        //primer cuadrado
        let posicionCuadrdoX=posicionTableroX;
        let posicionCuadradoY=posicionTableroY;
        
        for(let i =0; i < this.rows;i++){
            let fila = [];
            
            for(let j=0;j<this.cols;j++){
                if(j==0){
                    posicionCuadrdoX= posicionTableroX;
                }
                //creo cuadrado
                
                let cuadrado = this.addCuadrado(posicionCuadrdoX,posicionCuadradoY);
                posicionCuadrdoX+=this.cuadradoSize;
                fila.push(cuadrado);
            }
            
            this.matriz.push(fila);
            
           
            posicionCuadradoY+=this.cuadradoSize;
            
        }

    }
    addCuadrado(posicionCuadrdoX,posicionCuadradoY){
        let cuadrado = new Cuadrado(posicionCuadrdoX, posicionCuadradoY, this.cuadradoSize, this.ctx);
        this.cuadrados.push(cuadrado);
        return cuadrado;
    }
    draw() {
        // Limpiar el canvas antes de redibujar
        
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.cargarTablero();
        
        for(let i =0; i <this.cuadrados.length;i++){
            this.cuadrados[i].draw(this.imgCuadrado);
        }
       
        
    }

    dropFicha(col,playerTurn) {
        for (let row = this.rows - 1; row >= 0; row--) {
            if (this.board[row][col] === null) {
                this.board[row][col] =playerTurn; // Coloca la pieza del jugador en la columna
                return row; // Devuelve la fila donde cayó la ficha
            }
        }
        return -1; // Si la columna está llena
    }

  
    // Verificamos 4 en línea horizontal
    checkHorizontal(row, playerTurn) {
        let contador = 0;
        for (let c = 0; c < this.cols; c++) {
            if (this.board[row][c] === playerTurn) {
                contador++;
                if (contador >=this.cantLineas) return true;
            } else {
                contador = 0;
            }
        }
        return false;
    }

    // Verificamos 4 en línea vertical
    checkVertical(col,playerTurn) {
        let contador = 0;
        for (let r = 0; r < this.rows; r++) {
            if (this.board[r][col] === playerTurn) {
                contador++;
                if (contador >=this.cantLineas) return true;
            } else {
                contador = 0;
            }
        }
        return false;
    }

    // Verificamos diagonal primaria
    checkDiagonalPrimaria(row, col,playerTurn) {
        let startRow = row - Math.min(row, col);
        let startCol = col - Math.min(row, col);

        let contador = 0;
        while (startRow < this.rows && startCol < this.cols) {
            if (this.board[startRow][startCol] === playerTurn) {
                contador++;
                if (contador >= this.cantLineas) return true;
            } else {
                contador = 0;
            }
            startRow++;
            startCol++;
        }
        return false;
    }

    // Verificamos diagonal secundaria
    checkDiagonalSecundario(row, col, playerTurn) {
        let startRow = row - Math.min(row, this.cols - 1 - col);
        let startCol = col + Math.min(row, this.cols - 1 - col);

        let contador = 0;
        while (startRow < this.rows && startCol >= 0) {
            if (this.board[startRow][startCol] === playerTurn) {
                contador++;
                if (contador >=this.cantLineas) return true;
            } else {
                contador = 0;
            }
            startRow++;
            startCol--;
        }
        return false;
    }

   
  
    getCols(){
        return this.cols;
    }
    getRows(){
        return this.rows;
    }
    setCols(cols){
        this.cols=cols;
    }

    setRows(rows){
        this.rows=rows;
    }
    getCellSize(){
        return this.cellSize;
    }
    setCellSize(cellSize){
        this.cellSize=cellSize;
    }
}