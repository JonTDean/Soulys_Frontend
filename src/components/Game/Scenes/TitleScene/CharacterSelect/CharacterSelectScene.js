import Phaser from 'phaser';
import TestScene from '../../Maps/TestMap/TestScene';
import { userCharacters } from '../../../Main';
// Keep these for in bounds logic to reach
import React from 'react';
import Bootstrap from 'bootstrap';

class CharacterSelectScene extends Phaser.Scene{
    
    create (){
        this.characterSelectTitle = this.add.text(
            this.scale.width / 2, 
            this.scale.height * 0.10, 
            "Please Choose A Character", {
                fontFamily: 'Courier',
                fontSize: '48px'
        }).setOrigin(0.5);

        this.element = this.add.dom(200, 300)
        .createFromCache('nameform')
        .setPerspective(800)
        .addListener('click');

        grabCharacters()

        this.element.on('click', e => {
            console.log('Clicking the Character ~> ', e)
            //// Adds the Game Scene to the current array.
            this.scene.add("TestScene", TestScene, true);

            //// Starts the Scene with the following name
            this.scene.start("TestScene");
            // //  Turn off the click events ~~ Doesn't Work?
            // // this.removeListener('click');

            // //  Tween the login form out
            // this.scene.tweens.add({ targets: this.element.rotate3d, x: 1, w: 90, duration: 3000, ease: 'Power3' });

            // this.scene.tweens.add({ targets: this.element, scaleX: 2, scaleY: 2, y: 700, duration: 3000, ease: 'Power3',
            //     onComplete: function ()
            //     {
            //         this.element.setVisible(false);
            //         //// Adds the Game Scene to the current array.
            //         this.scene.add("TestScene", TestScene, true);

            //         //// Starts the Scene with the following name
            //         this.scene.start("TestScene");
            //     }
            // });
        })

        this.tweens.add({
            targets: this.element,
            y: 300,
            duration: 3000,
            ease: 'Power3'
        });
    }

    update(){

    }
}

export default CharacterSelectScene;

function grabCharacters(){
    let characterDiv = document.querySelector('.chooseACharacter');
    characterDiv.classList = "chooseACharacter container"

    if(userCharacters.length === 1){
        return(
            characterDiv.innerHTML = `
            <div class='${userCharacters[0].id} characterContainer'>
                <div class='characterSubContainer'>
                    <h1 class='characterRow' id='${userCharacters[0].name}'>Name:</h3>
                        <p>${userCharacters[0].name}</p></br>
                    <h2 class='characterRow' id='${userCharacters[0].level}'>Level:</h3>
                        <p>${userCharacters[0].level}</p></br>
                    <h3 class='characterRow' id='${userCharacters[0].physique}'>Physique:</h3>
                        <p>${userCharacters[0].physique}</p>
                </div>
            </div>
            `
        )
    }else if(userCharacters.length === 2){
        return( 
            characterDiv.innerHTML = `
            <div class='${userCharacters[0].id} characterContainer'>
                <div class='characterSubContainer'>
                    <h3 class='characterRow'>Name:</h3>
                        <p>${userCharacters[0].name}</p></br>
                    <h3 class='characterRow'>Level:</h3>
                        <p>${userCharacters[0].level}</p></br>
                    <h3 class='characterRow'>Physique:</h3>
                        <p>${userCharacters[0].physique}</p>
                </div>
            </div>

            <div class='${userCharacters[1].id} characterContainer'>
                <div class='characterSubContainer'>
                    <h3 class='characterRow'>Name:</h3>
                        <p>${userCharacters[1].name}</p></br>
                    <h3 class='characterRow'>Level:</h3>
                        <p>${userCharacters[1].level}</p></br>
                    <h3 class='characterRow'>Physique:</h3>
                        <p>${userCharacters[1].physique}</p>
                </div>
            </div>
            `
        )
    }else if(userCharacters.length === 3){
        return(
            characterDiv.innerHTML = `
            <div class='${userCharacters[0].id} characterContainer'>
                <div class='characterSubContainer'>
                    <h3 class='characterRow'>Name:</h3>
                        <p>${userCharacters[0].name}</p></br>
                    <h3 class='characterRow'>Level:</h3>
                        <p>${userCharacters[0].level}</p></br>
                    <h3 class='characterRow'>Physique:</h3>
                        <p>${userCharacters[0].physique}</p>
                </div>
            </div>

            <div class='${userCharacters[1].id} characterContainer'>
                <div class='characterSubContainer'>
                    <h3 class='characterRow'>Name:</h3>
                        <p>${userCharacters[1].name}</p></br>
                    <h3 class='characterRow'>Level:</h3>
                        <p>${userCharacters[1].level}</p></br>
                    <h3 class='characterRow'>Physique:</h3>
                        <p>${userCharacters[1].physique}</p>
                </div>
            </div>

            <div class='${userCharacters[2].id} characterContainer'>
                <div class='characterSubContainer'>
                    <h3 class='characterRow'>Name:</h3>
                        <p>${userCharacters[2].name}</p></br>
                    <h3 class='characterRow'>Level:</h3>
                        <p>${userCharacters[2].level}</p></br>
                    <h3 class='characterRow'>Physique:</h3>
                        <p>${userCharacters[2].physique}</p>
                </div>
            </div>
            `
        )
    }else{
        return(
            characterDiv.innerHTML = `
            <p> Please Create a Character </p>
            `
        )
    }
 
}