function Square() {
    this.x = 200;
    this.y = 200;
    this.velocity = 2;
    this.limit = 300;

    //logika sterująca obiektem
    this.update = function() {
        this.x += this.velocity;
        if (this.x >= this.limit || this.x <= 0) 
            this.velocity = -this.velocity;     
    }   

    //funkcją rysująca obiekt
    this.draw = function(ctx) {     
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 200, 200);        
    }
}

export { Square }