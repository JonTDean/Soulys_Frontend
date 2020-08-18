import React, { useReducer } from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { reducer, handleChange } from '../../../Site/Utilities/UserUtil';
import { handleCharacterCreationForm } from '../../../Site/Fetch_Requests/Character_Fetch_Requests';

// Pseudo State
const initialState = {
    characterName: "Soulless",
    characterPhysique: "Masculine", 
}

function CreateACharacter(props){
    const [state, dispatch] = useReducer(reducer, initialState);

    // Props destructure
    const { history } = props;

    // Redirects to View
    function redirectToCharacterMenu(history, e){
        // Push Data to the Server
        handleCharacterCreationForm(e, state, props.currentUser.username)

        // If the History Exists then reroute to the specified link
        if(history){
            return history.push("/Game/Characters/View");
        }
    }

    return(
        <Form onSubmit={ e => redirectToCharacterMenu(history, e)}> 
                
            {/* Username */}
            <Form.Group controlId="characterName">
                <Form.Label> Character Name </Form.Label>
                <Form.Control 
                    type="text" 
                    name="characterName" 
                    autoComplete="off" 
                    onChange={ e => handleChange(e, dispatch) }
                />
            </Form.Group>

            {/* Password */}
            <Form.Group controlId="characterPhysique">
                <Form.Label>Character Physique</Form.Label>
                <Form.Control
                    name="characterPhysique"
                    as="select"  
                    onChange={ e => handleChange(e, dispatch) }
                >
                    <option> Masculine </option>
                    <option> Feminine </option>
                    <option> Neither </option>
                    <option> Both </option>
                </Form.Control>
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit">
                Create a Character
            </Button>
        </Form>
    )
}

export default withRouter(CreateACharacter);