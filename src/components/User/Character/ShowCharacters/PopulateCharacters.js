import React, {useState} from 'react';
import EditCharacters from '../ModifyCharacters/EditCharacter';
import { characterImageBase } from '../../../Site/Utilities/UserUtil';
import { Card, Button, Col } from 'react-bootstrap';
import { handleDeleteCharacter } from '../../../Site/Fetch_Requests/Character_Fetch_Requests';

let editFormState = {
    isFormVisible: false
};

let showStatsState = {
    isStatsVisible: false
};

function PopulateCharacters(user){
    // Destructure the Character out of user
    const character = user.characters;

    // Instantiates a Variable for global use
    let buttonType;

    // Performs Check so Site doesn't Break
    if(user.buttonType){
        buttonType = user.buttonType;
    }else{
        buttonType = 'empty';
    }
    
    // Destructure editFormState
    const [editForm, setEditForm] = useState(editFormState);
    
    // Destructure editForm
    const { isFormVisible } = editForm;

    // Toggles the Form
    let toggleForm = () => {
        setEditForm(prevState => ({ isFormVisible: !prevState.isFormVisible }));
    };

    // Destructure showStatsState
    const [ showStats, setShowStats] = useState(showStatsState);

    // Destructure showStats
    const { isStatsVisible } = showStats;

    // Toggles the Stats
    let toggleStats = () => {
        setShowStats(prevState => ({ isStatsVisible: !prevState.isStatsVisible }));
    };

    return(
        <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Body className={`characterID_${character.id}`}>
                    <Card.Title className="border-1 border-bottom">{character.name}</Card.Title>
                    {character.physique ? <Card.Img className='physiqueImg rounded border-1 border-bottom pb-1' variant="top" src={characterImageBase(character.physique)} />: <Card.Text>Physique: is undefined</Card.Text>}
                    
                    {/* Button Types for Fields */}
                        {/* Modify Field */}
                        {buttonType === 'modify' ? 
                            <Card.Body className="characterButtons">
                                <Button className="ml-2" onClick={toggleForm}>Edit</Button>
                                <Button className="ml-2" onClick={e => handleDeleteCharacter(e, character.id)}>Delete</Button>
                            </Card.Body> 
                        :
                            <></>
                        }

                        {/* View Characters */}
                        {buttonType === 'view' ?
                            <Card.Body className="characterButtons">
                                <Button className="ml-2" onClick={toggleStats}>Show Stats</Button>
                            </Card.Body> 
                        :
                            <></>
                        }

                    {/* Stats for Character */}
                    <Card.Body className={`${isStatsVisible ? "" : "d-none"}`} >
                        <Card.Text>Level: {character.level}</Card.Text>
                        <Card.Text>Current Experience: {character.current_experience}</Card.Text>
                    </Card.Body>

                    {/* Edit Forms */}
                    <Card.Body className={`${isFormVisible ? "" : "d-none"}`} >
                        <EditCharacters user={user} characterID={character.id}/>
                    </Card.Body>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default PopulateCharacters;
