class Bala {
    constructor(posX, posY){
        var config = {
            isStatic: true
        }
        this.r = 30;
        this.corpo = Bodies.circle(posX, posY, this.r, config);
        this.image = loadImage("./assets/cannonball.png");
        World.add(world, this.corpo);
    }

    mostrar(){
        var pos = this.corpo.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        pop();
    }
}