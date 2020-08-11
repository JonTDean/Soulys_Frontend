import Phaser from 'phaser';
import TitleScene from '../TitleScene/TitleScene';
import { loadPlayer } from './LoadPlayer';
import { loadStartingMap } from './LoadMap';
import { loadTitleScreen } from './LoadTitleScreen';
import { loadPlugins } from './LoadPlugins';
import { loadUtilities } from './LoadUtilities';

class BootScene extends Phaser.Scene{

    init(){
        // Sets Scene Background Color for camera view
        // Using For Debug purposes for Scene Switching
        this.cameras.main.setBackgroundColor('#DABECA');
    }

    preload(){
        // Loads Title Screen Resources
        loadTitleScreen(this);

        // Loads Player Resources
        loadPlayer(this);
    
        //// Load Map Resources
        // Loads Starting Map
        loadStartingMap(this);

        // Loads Phaser Plugins 
        loadPlugins(this);

        // Loads Utilities for Phaser/React Usage
        loadUtilities(this);
    }
    
    create(){
        //// Scene Propagation ->
        // Adds the following Scene to the Phaser Scene Array for canvas Switching
        this.scene.add("titleScene", TitleScene, true);

        // Starts the Scene with the following name
        this.scene.start("titleScene");
    }
}

export default BootScene