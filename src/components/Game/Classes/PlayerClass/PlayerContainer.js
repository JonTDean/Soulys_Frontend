import { playerMovement } from './PlayerLogic/PlayerMovement';
import { playAnims } from './PlayerAnimations/PlayerAnimations';
import { createWalkingAnims, createIdleAnims } from './PlayerAnimations/CreatePlayerAnims';
import Phaser from 'phaser';
import Player from './Player';

class PlayerContainer extends Phaser.GameObjects.Container{
    constructor(scene, x, y, key){
        super(scene, x, y);

        // Set Current Player Sprites Scene to this.scene
        this.scene = scene;

        // Set Size of the container
        this.setSize(64, 64);

        // Scale Player Depth
        this.setDepth(2);
        
        // Set Base Velocity for Player Movement Speed
        // Velocity acts as a force that pushes the player Sprite towards a direction on the x/y axis.
        // The Velocity compounds on itself and is (n^2)*(delta_time/time) exponentiative 
        this.velocity = 270;

        // Work with Phaser.Physics
        this.scene.physics.world.enable(this);
        
        // Collide With World Bounds
        this.body.setCollideWorldBounds(true);

        // Add the player container to the scene
        this.scene.add.existing(this);

        // Create the player
        this.player = new Player(this.scene, 0, 0, key)
        this.add(this.player);
        
        // Follow the Player
        // this.scene.camera.main.startFollow(this);
    }
    
    create(){
        // console.log(`Inside of PlayerContainer, PlayerContainer This: `, this);
        // // Generate Key Press for Arrow Keys
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        
        // console.log(this.player.anims);
        // // Generate Walking Animations
        createWalkingAnims(this.scene.anims); 

        // Generate Idle Animations
        createIdleAnims(this.scene.anims);
    }

    update(){
        // Handles Player Movement
        playerMovement( this.cursors, this, this.velocity );

        // // Handles Player Animations
        playAnims( this.cursors, this.player );
    }

}

export default PlayerContainer;
