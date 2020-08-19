import React, { useReducer } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { reducer, handleChange } from '../../../Site/Utilities/UserUtil';
import { handleUpdateCharacter } from '../../../Site/Fetch_Requests/Character_Fetch_Requests';

// Pseudo State
const initialState = {
    characterName: "Soulless",
    characterPhysique: "Masculine", 
}

function EditCharacters(props){
    const [state, dispatch] = useReducer(reducer, initialState);
    // const [characterID, setCharacterID] = useState(initialState);
    state.characterName = props.user.characters.name;

    // console.log(state.characterName)
    return(
        <div>
            <Row className='justify-content-center'>
                <Form onSubmit={e => handleUpdateCharacter(e, state, props.characterID) } > 
            
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
                        Edit {state.characterName ? state.characterName : "Anonymous" }
                    </Button>
                </Form>
            </Row>
        </div>
    )
}

export default EditCharacters;