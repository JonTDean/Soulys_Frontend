import React from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
import BootScene from './Scenes/Boot/BootScene';
import { GameState } from './Utilities/GameState';

//// Phaser Main Top Level Functionality

// Characters
export let userCharacters;

// Game Logic
export default function Main(props){
    if (props.currentUser.characters){
        userCharacters = props.currentUser.characters;
    }

    return(
        <div id="gameContainer">
            <IonPhaser game={GameState( Phaser, BootScene )} initialize={true} /> 
        </div>
    )
}

