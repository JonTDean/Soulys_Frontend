import React, { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { reducer, handleChange } from '../../../Site/Utilities/UserUtil';
import { handleCharacterCreationForm } from '../../../Site/Fetch_Requests/Character_Fetch_Requests';

// Pseudo State
const initialState = {
    characterName: "",
    characterPhysique: "Masculine", 
}

function CreateACharacter(props){
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(props.currentUser)
    return(
        <Form onSubmit={e => handleCharacterCreationForm(e, state, props.currentUser.username) } > 
                
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

export default CreateACharacter;