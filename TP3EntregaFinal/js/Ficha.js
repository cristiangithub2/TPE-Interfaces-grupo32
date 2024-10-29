class Ficha extends Figura{
    constructor(posX,posY, fill,ctx,radio,player){
        super(posX,posY,fill,ctx);
        this.radio=radio;
        this.recorridoCirc = 2;
        this.player=player;
        this.puedeMoverse=true;
        this.xInicial=this.posX;
        this.yInicial=this.posY;
    }



    draw(){
        super.draw();
        this.ctx.beginPath(); // Usar this.ctx para iniciar el dibujo en el contexto del canvas
        this.ctx.arc(this.posX, this.posY, this.radio, 0, this.recorridoCirc * Math.PI);
        this.ctx.fill();
        

        if(this.resaltado === true){
            this.ctx.strokeStyle = this.resaltadoEstado;
            this.ctx.lineWidth = 5;
            this.ctx.stroke();
        }
        this.ctx.closePath();
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
}

