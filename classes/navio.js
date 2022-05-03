class Navio {
    constructor(posX, posY, lar, alt, navioPos, naviosAnimation){
        this.corpo = Bodies.rectangle(posX, posY, lar, alt);
        this.lar = lar;
        this.alt = alt;
        this.navioPos = navioPos;
        this.imagem = loadImage("./assets/boat.png");
        this.animation = naviosAnimation;
        this.vel = 0.05;
        World.add(world,this.corpo);
    }

    animacao(){
        this.vel += 0.05;
    }

    mostrar(){
        var pos = this.corpo.position;
        var angle = this.corpo.angle;
        var index = floor(this.vel % this.animation.length);

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index], 0, this.navioPos, this.lar, this.alt);
        pop();
    }

    deletar(index){
        setTimeout(()=>{
            Matter.World.remove(world, navios[index].corpo);
            delete navios[index];
        },2000);

    }
}