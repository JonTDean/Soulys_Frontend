import Phaser from 'phaser';
import { screenText, animateRainbowText, startButton, interactiveStartButton } from './TitleScreenText';

class TitleScene extends Phaser.Scene{
    
    create(){
        // Screen Text
        screenText(this);
        this.hsv = Phaser.Display.Color.HSVColorWheel();
        
        // Start Button
        startButton(this);
        interactiveStartButton(this)
    }

    update(){
        animateRainbowText(this, this.hsv);
    }
}

export default TitleScene