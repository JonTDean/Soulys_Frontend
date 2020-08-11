import React from 'react';
import PopulateCharacters from './PopulateCharacters';

function ShowUserCharacters(props){
    // Variablize Characters
    const characters = props.currentUser.characters;
    
     if(characters){
        return characters.map(character => {
            return(
                <PopulateCharacters key={character.id.toString()} characters={character} buttonType={'view'}/>
            )
        })
    }else{
        return null;
    }
}
export default ShowUserCharacters;
