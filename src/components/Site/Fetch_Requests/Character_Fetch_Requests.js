import { BaseURL } from '../../Site/Utilities/UserUtil';

// Handles Character Creation Fetch
export function handleCharacterCreationForm(e, state, username){
    e.preventDefault();
    const {characterName, characterPhysique } = state
    console.log(state);

    fetch(BaseURL(`profile/new/character`), {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            username: username,
            name: characterName,
            physique: characterPhysique
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