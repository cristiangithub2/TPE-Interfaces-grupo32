
class Tablero {
    constructor(rows, cols, ctx,cantLineas,cuadradoSize) {
        this.rows = rows;       // Número de filas
        this.cols = cols;       // Número de columnas
        this.ctx = ctx;         // Contexto del canvas
        this.matriz = []; //esta es la  logica
        this.cuadrados=[];    //ese es para el dibujo
        this.offset_X = (ctx.canvas.width - cols * cuadradoSize) / 2; // Centrado horizontal
        this.offset_Y = ctx.canvas.height - (rows * cuadradoSize) - 20; // Posicionado cerca del fondo
        this.receptor = new Receptor(this.cols, this.offset_X, this.offset_Y - cuadradoSize, cuadradoSize, this.ctx);
        this.cantLineas= cantLineas;
        this.cuadradoSize=cuadradoSize;
        this.imgCuadrado= "./img/cuadradoImg.png";
    }
    getCantLineas(){
        return this.cantLineas;
    }
    getReceptor() {
        return this.receptor;
    }
    getCuadradoSize(){
        return this.cuadradoSize;
    }
    getOffSet_Y(){
        return this.offset_Y;
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
      
        if(this.cuadrados.length == 0){
           
            this.cargarTablero();
        }
        for(let i =0; i <this.cuadrados.length;i++){
            this.cuadrados[i].draw(this.imgCuadrado);
            
        }
       
        
    }

    dropFicha(columna,fichaActual) {
        //se reccorre la matriz

        for(let i = this.matriz.length-1; i >=  0; i--){
            let fila = this.matriz[i];
            //si la posicion en la matriz esta libre
          
            if(!fila[columna].estaOcupada()){
                fila[columna].setFicha(fichaActual);
                return i;
                break;
            }
            else if(i ===0){
                return -1;
            }
        }
    }


    //si se cumple alguno de los checkeos termina el juego
    checkGanador(fila,columna,turno){
        //console.log(this.checkDiagonales(fila,columna,turno),this.checkFila(fila,columna,turno),this.checkColumna(fila,columna,turno));
        if(this.checkDiagonales(fila,columna,turno) || this.checkFila(fila,columna,turno) || this.checkColumna(fila,columna,turno)){
            return true;
        }
        else{return false;}
    }
    checkDiagonales(fila,columna,turno){
        //llama a las funciones que checkean en las distintas diagonales
        let suma = 0;
        let izqAbajo = this.checkDiagAbajIzq(suma,fila,columna,turno);
        let izqArriba = this.checkDiagArribIzq(suma,fila,columna,turno);
        let derAbajo = this.checkDiagAbajDer(suma,fila,columna,turno);
        let derArriba = this.checkDiagArribDer(suma,fila,columna,turno);
        if(izqAbajo === 0 || derArriba === 0){
            if((izqAbajo + derArriba) >= this.cantLineas){
                return true;
            }
        }
        if(derAbajo === 0 || izqArriba === 0){
            if((izqArriba+derAbajo) >= this.cantLineas){
                return true;
            }
        }
        //cuando ninguno de los dos es == 0, se le resta 1 en el calculo
        if((((izqAbajo + derArriba)-1) >= this.cantLineas) || (((izqArriba+derAbajo)-1) >=this.cantLineas)){
            return true;
        }
        else{
            return false;
        }
    }
    //llama a la funcion checkAbajo y si resultado es > a la cantidad en Linea retorna true
    checkColumna(fila,columna,turno){
        let suma = 0;
        let abajo =  this.checkAbajo(suma,fila,columna,turno);
        if(abajo >= this.cantLineas){
            return true;
        }
        else{
            return false;
        }
    }
    //llama a la funcion checkDerecha y checkIzquierda
    //si alguno de los resultados es == 0 suma los resultados y retorna
    //si en ambos lados hay fichas, a la cuenta se le resta 1
    checkFila(fila,columna,turno){
        let suma = 0;
        let derecha = this.checkDerecha(suma,fila,columna,turno);
        let izquierda = this.checkIzquierda(suma,fila,columna,turno);
        if(derecha === 0 || izquierda === 0){
            if((derecha + izquierda) >= this.cantLineas){
                return true;
            }
        }
        if(((derecha + izquierda)-1) >= this.cantLineas){
            return true;
        }
        else{
            return false;
        }
    }
    //obtiene la posicion en la que se inserto la ficha
    //y si el tipo de ficha en ese casillero es == al tipo de ficha del turno actual
    //incrementa suma y se llama recursivamente una fila arriba
    //si el resultado  <= 1 es porq no se encontraron fichas asi que devuelve 0
    checkAbajo(suma,fila,columna,turno){
        let filaMatriz = this.matriz[fila]
        let espacio = filaMatriz[columna]
        let tipoFicha = espacio.getTipoDeFicha();
        if(tipoFicha!=null){
            if(tipoFicha === turno){
                suma++
                if(fila<this.rows-1){
                    suma = this.checkAbajo(suma,fila+1,columna,turno)
                }
            }
        }
        if(suma<=1){
            return 0;
        }
        else{
            return suma;
        }
    }
    checkDerecha(suma,fila,columna,turno){
        let filaMatriz = this.matriz[fila]
        let espacio = filaMatriz[columna]
        let tipoFicha = espacio.getTipoDeFicha();
        if(tipoFicha!=null){
            if(tipoFicha === turno){
                suma++
                if(columna<this.rows-1){
                    suma = this.checkDerecha(suma,fila,columna+1,turno)
                }
            }
        }
        if(suma<=1){
            return 0;
        }
        else{
            return suma;
        }
    }
    checkIzquierda(suma,fila,columna,turno){
        let filaMatriz = this.matriz[fila]
        let espacio = filaMatriz[columna]
        let tipoFicha = espacio.getTipoDeFicha();
        if(tipoFicha!=null){
            if(tipoFicha === turno){
                suma++
                if(columna>0){
                    suma=this.checkIzquierda(suma,fila,columna-1,turno)
                }
            }
        }
        if(suma<=1){
            return 0;
        }
        else{
            return suma;
        }
    }
    checkDiagArribIzq(suma,fila,columna,turno){
        let filaMatriz = this.matriz[fila]
        let espacio = filaMatriz[columna]
        let tipoFicha = espacio.getTipoDeFicha();
        if(tipoFicha!=null){
            if(tipoFicha === turno){
                suma++
                if(columna>0 && fila>0){
                    suma = this.checkDiagArribIzq(suma,fila-1,columna-1,turno);
                }
            }
        }
        if(suma<=1){
            return 0;
        }
        else{
            return suma;
        }
    }
    checkDiagArribDer(suma,fila,columna,turno){
        let filaMatriz = this.matriz[fila]
        let espacio = filaMatriz[columna]
        let tipoFicha = espacio.getTipoDeFicha();
        if(tipoFicha!=null){
            if(tipoFicha ===  turno){
                suma++
                if(columna<this.cols-1 && fila>0){
                    suma = this.checkDiagArribDer(suma,fila-1,columna+1,turno);
                }
            }
        }
        if(suma<=1){
            return 0;
        }
        else{
            return suma;
        }
    }
    checkDiagAbajIzq(suma,fila,columna,turno){
        let filaMatriz = this.matriz[fila]
        let espacio = filaMatriz[columna]
        let tipoFicha = espacio.getTipoDeFicha();
        if(tipoFicha!=null){
            if(tipoFicha === turno){
                suma++
                if(columna>0 && fila<this.rows-1){
                    suma = this.checkDiagAbajIzq(suma,fila+1,columna-1,turno);
                }
            }
        }
        if(suma<=1){
            return 0;
        }
        else{
            return suma;
        }
    }
    checkDiagAbajDer(suma,fila,columna,turno){
        let filaMatriz = this.matriz[fila]
        let espacio = filaMatriz[columna]
        let tipoFicha = espacio.getTipoDeFicha();
        if(tipoFicha!=null){
            if(tipoFicha === turno){
                suma++
                if(columna<this.cols-1 && fila<this.rows-1){
                    suma = this.checkDiagAbajDer(suma,fila+1,columna+1,turno);
                }
            }
        }
        if(suma<=1){
            return 0;
        }
        else{
            return suma;
        }
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
    getCuadradosize(){
        return this.Cuadradosize;
    }
    setCuadradosize(cellSize){
        this.Cuadradosize=cellSize;
    }
}
