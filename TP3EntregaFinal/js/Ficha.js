class Ficha extends Figura{
    constructor(posX,posY,ctx,radio,player){
        super(posX,posY,"trasparent",ctx);
        this.radio=radio;
        this.recorridoCirc = 2;
        this.player=player;
        this.puedeMoverse=true;
        this.xInicial=this.posX;
        this.yInicial=this.posY;
        this.image= new Image();
        this.enMovimiento = false; 
    }
    getJugador(){
        return this.player
    }


    draw(imgSrc){
        super.draw();
        this.ctx.beginPath(); // Usar this.ctx para iniciar el dibujo en el contexto del canvas
        this.ctx.arc(this.posX, this.posY, this.radio, 0, this.recorridoCirc * Math.PI);
        this.ctx.fill();
        if (this.image.src === "" ) {
            this.image.src = imgSrc;
            this.image.onload = () => {
                this.ctx.drawImage(this.image, this.posX - this.radio, this.posY - this.radio, this.radio / 0.5, this.radio / 0.5);
            };
            this.image.onerror = () => {
                console.error("Error al cargar la imagen:", imgSrc);
            };
        } else if (this.image.complete) {
            // Dibuja la imagen si ya se cargó previamente
            this.ctx.drawImage(this.image, this.posX - this.radio, this.posY - this.radio, this.radio / 0.5, this.radio / 0.5);
        }
    }

    setResaltado(resaltado){
        this.resaltado = resaltado;
    }

    setRadio(radio){
        this.radio = radio;
    }

    setPlayer(player){
        this.player=player;
    }
    setRecorridoCirc(recorridoCirc){
        this.recorridoCirc = recorridoCirc;
    }

    getRadio(){
        return this.radio;
    }

    getReccorridoCirc(){
        return this.recorridoCirc;
    }
    getPlayer(){
        return this.player;
    }
    iniciarMovimiento() {
        this.enMovimiento = true;
    }

    // Llama a esta función para detener el movimiento
    detenerMovimiento() {
        this.enMovimiento = false;
    }

    // Verifica si la ficha sigue en movimiento
    estaEnMovimiento() {
        return this.enMovimiento;
    }
    isPointInside(x, y) {
        if(this.getPuedeMoverse()){
            let _x = this.posX - x;
            let _y = this.posY - y; 
            let distancia= Math.sqrt(_x * _x + _y * _y);
            if(distancia > this.radio){
                return false;
            }else{
                this.xInicial = this.posX;
                this.yInicial = this.posY;
                return true;
            }
        }else{
            return false;
        }
        
    }
    getPuedeMoverse(){
        return this.puedeMoverse;
    }
    move(x,y){
        this.posX=x ; this.posY=y;
    }
    posInicial(){
        this.move(this.xInicial,this.yInicial);
        
    }
    ponerEnTablero(){
        this.puedeMoverse=true;
    }
    getY(){
        return this.posY;
    }
    getX(){
        return this.posX;
    }
    getPosition(){
        return{
            x:this.getPosX(),
            y:this.getPosY()
        };
    }

    getPosX(){
        return this.posX;
    }

    getPosY(){
        return this.posY;
    }
    getFill(){
        return this.fill;
    }
    setFill(fill){
        this.fill=fill;
    }
    
    setPosition(x,y){
        this.posX=x;
        this.posY=y;
    }
}

