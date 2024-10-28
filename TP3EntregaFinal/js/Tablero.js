class Tablero {
    constructor(rows, cols, cellSize, ctx) {
        this.rows = rows;       // Número de filas
        this.cols = cols;       // Número de columnas
        this.cellSize = cellSize; // Tamaño de cada celda
        this.ctx = ctx;         // Contexto del canvas
        this.board = Array.from({ length: rows }, () => Array(cols).fill(0)); // Inicializa el tablero    
        this.offset_X = (ctx.canvas.width - cols * cellSize) / 2; // Centrado horizontal
        this.offset_Y = ctx.canvas.height - (rows * cellSize) - 20; // Posicionado cerca del fondo
        this.receptor = new Receptor(this.cols, this.offset_X, this.offset_Y - cellSize, cellSize, this.ctx);
    }
    getReceptor() {
        return this.receptor;
    }
   

    draw() {
        // Limpiar el canvas antes de redibujar
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const posX = this.offset_X + col * this.cellSize + this.cellSize / 2; // Centro en X
                const posY = this.offset_Y + row * this.cellSize + this.cellSize / 2; // Centro en Y
                const radio = this.cellSize / 2 * 0.8; // Radio de la ficha (ajustado al tamaño de la celda)
    
                if (this.board[row][col] === 1) {
                    const ficha = new Ficha(posX, posY, "red", this.ctx, radio, 1); // Crea una ficha roja
                    ficha.draw(); // Dibuja la ficha
                } else if (this.board[row][col] === 2) {
                    const ficha = new Ficha(posX, posY, "blue", this.ctx, radio, 2); // Crea una ficha azul
                    ficha.draw(); // Dibuja la ficha
                }
                
                this.ctx.strokeRect(this.offset_X + col * this.cellSize, this.offset_Y + row * this.cellSize, this.cellSize, this.cellSize); // Dibuja el borde del cuadrado
            }
        }
       
        
    }

    dropFicha(col,playerTurn) {
        for (let row = this.rows - 1; row >= 0; row--) {
            if (this.board[row][col] === 0) {
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
                if (contador >= 4) return true;
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
                if (contador >= 4) return true;
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
                if (contador >= 4) return true;
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
                if (contador >= 4) return true;
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