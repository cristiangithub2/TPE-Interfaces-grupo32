class Receptor{
    constructor(cols,posX,posY,cellSize,ctx){
        this.rows=1;
        this.cols=cols;
        this.posX=posX;
        this.posY=posY;
        this.cellSize=cellSize;
        this.recept = Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
        this.ctx=ctx;
    }

    detectarFicha(x, y) {
        return x >= this.posX && x <= this.posX + (this.cellSize * this.cols) &&
               y >= this.posY && y <= this.posY + this.cellSize ;
    }

    colReceptor(x) {
        const col = Math.floor((x - this.posX) / this.cellSize);
    // Asegúrate de que la columna calculada esté dentro del rango permitido
    return Math.max(0, Math.min(col, this.cols - 1)); // Limita el resultado entre 0 y cols-1
    }
    draw() {
        this.ctx.fillStyle = "blue";
        for (let col = 0; col < this.cols; col++) {
            const posX = this.posX + col * this.cellSize;
            const posY = this.posY;
            this.ctx.fillRect(posX, posY, this.cellSize, this.cellSize);
        }
    }
    cantReceptor(){
        return this.recept.length;
    }
    getPosX(){
        return this.posX;
    }
    getPosY(){
        return this.posY;
    }
    getCellSize(){
        return this.cellSize;
    }
}