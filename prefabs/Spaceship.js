class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, isBird) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   
        this.points = pointValue;   
        this.birdie = isBird; 
    }

    update() {
       if(this.birdie == 1){
            this.x += game.settings.spaceshipSpeed;
       } else {
            // move spaceship left
            this.x -= game.settings.spaceshipSpeed;
       }

        // wraparound from left to right edge
        if (this.x <= 0-this.width) {
            this.reset(); 
        } 
        if (this.birdie == 1 && this.x >= game.config.width+this.width) {
            this.reset(); 
        }
    }
    reset() {
       if(this.birdie == 1){
        this.y = Phaser.Math.RND.between(90 ,game.config.height/2 + 50);
        this.x = -60; 
    } else {
            this.x = game.config.width;
        }

    }
}