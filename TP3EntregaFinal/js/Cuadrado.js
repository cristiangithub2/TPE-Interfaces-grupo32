class Cuadrado {
    constructor(posX, posY, size, ctx) {
        this.posX=posX;
        this.posY= posY
        this.ctx=ctx;
        this.size = size; // Tamaño del cuadrado
        this.ficha=null;
        this.image= new Image();
        
    }
    setContenido(contenido){
        this.contenido=contenido;
    }
    getFicha(){
        return this.contenido;
    }
   
    draw(imgSrc) {
        // Verifica si la imagen ya está cargada
       
        if (this.image.src !== imgSrc) {
           
            this.image.src = imgSrc;
    
            // Maneja la carga de la imagen
            this.image.onload = () => {
               
                this.ctx.drawImage(this.image, this.posX, this.posY, this.size, this.size);
            };
    
            // Maneja errores de carga
            this.image.onerror = () => {
                console.error("Error al cargar la imagen:", imgSrc);
            };
    
           
        } else if (this.image.complete) {
            // Si la imagen ya está cargada, dibújala directamente
           
            this.ctx.drawImage(this.image, this.posX, this.posY, this.size, this.size);
        }
    }
    isPointInside(x, y) {
        return x >= this.posX && x <= this.posX + this.size &&
               y >= this.posY && y <= this.posY + this.size;
    }
   
}