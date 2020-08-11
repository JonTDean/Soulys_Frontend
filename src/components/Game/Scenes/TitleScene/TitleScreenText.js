// import TestScene from '../Maps/TestMap/TestScene';
import CharacterSelectScene from './CharacterSelect/CharacterSelectScene';

export function screenText(scene){
    // Creates the font for the title screen text
    scene.titleText = scene.add.text(
        scene.scale.width / 2,
        scene.scale.height / 2 - 50,
        "Soulys", {
            fontFamily: 'Courier',
            fontSize: '128px', 
            fill: '#D6D5C9'
    });

    // Sets the stroke of the Font
    scene.titleText.setStroke('#00f', 16);

    // Gives the Font a Shadow
    scene.titleText.setShadow(2, 2, "#333333", 2, true, true);

    // Sets the Origin of the text to the middle of the page
    scene.titleText.setOrigin(0.5);

}

let i = 0;

export function animateRainbowText(scene, hsv){
    // Colors top of the text
    let top = hsv[i].color;

    // Colors the bottom of the text
    let bottom = hsv[359 - i].color;

    // Tints the Text
    scene.titleText.setTint(top, top, bottom, bottom);

    // Iterator counter
    i += 1;
    
    // Loops through the Color Spectrum infinitely
    if (i === 360)
    {
        i = 0;
    }
}

export function startButton(scene){
    // Creates an image for the Start Button
    scene.startButton = scene.add.image( scene.scale.width / 2, scene.scale.height * 0.65, 'start_button')
    
    // Sets the Display Size
    scene.startButton.setDisplaySize(207, 102);

    // Sets the button to be interactive
    scene.startButton.setInteractive();

    // Sets the origin of the button to the middle of the page
    scene.startButton.setOrigin(0.5);
}

export function interactiveStartButton(scene){

    // When the image is clicked
    scene.startButton.on('pointerdown', () => {
        // console.log(' Pointer is Down ');
        scene.startButton.setTexture('start_button_clicked') // Sets Texture to Clicked

        // //// Adds the Game Scene to the current array.
        // scene.scene.add("TestScene", TestScene, true);
        scene.scene.add("CharacterSelectScene", CharacterSelectScene, true);

        // //// Starts the Scene with the following name
        // scene.scene.start("TestScene");
        scene.scene.start("CharacterSelectScene");

    });

    // When the Pointer is hovering over the Image
    scene.startButton.on('pointerover', () => {
        // console.log(' Pointer is Over ');
        scene.startButton.setTexture('start_button_hover')  // Sets Texture to Hovered

    })

    // When the Pointer is off the Image
    scene.startButton.on('pointerout', () => {
        // console.log(' Pointer is Out ');
        scene.startButton.setTexture('start_button')  // Sets Texture to Default
    })
}