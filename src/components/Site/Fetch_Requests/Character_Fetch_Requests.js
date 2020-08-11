import { BaseURL } from '../../Site/Utilities/UserUtil';

// Handles Character Creation Fetch
export function handleCharacterCreationForm(e, state, username){
    e.preventDefault();
    const {characterName, characterPhysique } = state

    console.log(state);
    // console.log(`Character Name : ${characterName}`);
    // console.log(`Character Physique: ${characterPhysique}`);

    fetch(BaseURL(`profile/new/character`), {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            username: username,
            name: characterName,
            physique: characterPhysique,
            level: 1,
            current_experience: 1,
        })
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
    })
};

// Handle the Delete portion of Characters
export function handleDeleteCharacter( e, characterID){
    e.preventDefault();
    
    fetch(BaseURL(`character/delete/${characterID}`),{
        method: "DELETE",
    })
    .then(console.log)
}

// Handle the Edit Character function
export function handleUpdateCharacter( e, state, characterID ){
    e.preventDefault();

    fetch(BaseURL(`character/edit/${characterID}`), {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            name: state.characterName, 
            physique: state.characterPhysique
        })
    })
    .then(console.log)
}