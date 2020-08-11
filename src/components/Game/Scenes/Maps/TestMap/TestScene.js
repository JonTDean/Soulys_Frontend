import Phaser from 'phaser';
import PlayerContainer from '../../../Classes/PlayerClass/PlayerContainer';
import UiScene from '../../UserInterface/UiScene';
import Map from '../../../Classes/Map';
import WorldManager from '../../../WorldManager/WorldManager'
import { handleCollisionColliders } from '../HandleCollisions';

let isSpawned = false;

class TestScene extends Phaser.Scene{

    init(){
        this.cameras.main.setBackgroundColor( '#EE6055' );
        this.scene.add("UiScene", UiScene, true);
        this.scene.launch('UiScene');

        // Contains all of the layers created from the Map
        this.allLayers = {};
    }

    create(){
        // Handles Map Creation Logic
        this.map = new Map(this, 'map', 'tileset_master', ['ground', 'walls', 'cliffs', 'house', 'props'], this.allLayers);
        
        // Creates a Game Manager
        this.createWorldManager();

    }

    // Handles Player Instance Creation
    createPlayer(location){
        // Generates a new Instance of Player
        this.player = new PlayerContainer( this, location[1] * 4, location[0] * 2, 'playerIdleDown' );
        // console.log(`Player Container: `, this.player.create);

        // Runs Player Create Function
        this.player.create();
    }

    // Handles world Manager Instance Creation
    createWorldManager(){
        if(!isSpawned){
            this.events.on('spawnPlayer', (location) => {
                // Checks for Spawn, fuking doppelgangers keep popping up.
                isSpawned = true

                // Creates a Player
                this.createPlayer(location);

                // Applies Colliders to Player
                handleCollisionColliders(this, this.allLayers);
            })
        }

        this.worldManager = new WorldManager(this, this.map.map.objects);
        this.worldManager.setup();
    }

    // Update Items that need persistence/event checks
    update(){
        // Have the camera follow the player
        // this.scene.camera.main.startFollow(this.player);

        // Call update from the player function
        this.player.update();
    }
}

export default TestScene;