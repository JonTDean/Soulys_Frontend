import Phaser from 'phaser';

class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, key){
        super(scene, x, y, key);

        // Set Current Player Sprites Scene to this.scene
        this.scene = scene;

        // Set Base Velocity for Player Movement Speed
        // Velocity acts as a force that pushes the player Sprite towards a direction on the x/y axis.
        // The Velocity compounds on itself and is (n^2)*(delta_time/time) exponentiative 
        this.velocity = 270;

        // Work with Phaser.Physics
        this.scene.physics.world.enable(this);

        // Set immovable if another object collides with our player
        this.setImmovable(true);

        // Collide With World Bounds
        this.body.setCollideWorldBounds(true);

        // Add the player to the scene
        this.scene.add.existing(this);

        // Scale Player Size
        this.setScale(4);
    }
}

export default Player;
