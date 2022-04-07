class Bala {
    constructor(x, y){
        var config = {
            isStatic: true
        }
        this.raio = 30;
        this.corpo = Bodies.circle(x, y, this.raio, config);
        this.imagem = loadImage("./assets/cannonball.png");
        World.add(world, this.corpo);
    }

    mostrar(){
        var pos = this.corpo.position;
        push();
        imageMode(CENTER);
        image(this.imagem, pos.x, pos.y, this.raio, this.raio);
        pop();
    }

    atirar(){
        var newAngle = canhao.ang - 28;
        newAngle = newAngle*(3.14/180);
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.corpo, false);
        Matter.Body.setVelocity(this.corpo, {x: velocity.x * (180/3.14), y: velocity.y * (3.14/180)});  
    }
}