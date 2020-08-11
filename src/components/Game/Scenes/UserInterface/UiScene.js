import Phaser from 'phaser';

class UiScene extends Phaser.Scene{

    create(){
        // Set's Up Components for UI
        this.setupUiModal();

        // Set's up UI Event System
        this.setupUiEvents();

    }

    setupUiModal(){
        // Create the score Text
        this.scoreText = this.add.text(35, 8, 'Coins: 0',{
            fill: '#FF6B6B',
            fontSize:'40px'
        })
    }

    setupUiEvents(){

    }
}

export default UiScene;