import React from 'react';
import CreateACharacter from './CreateCharacters/CreateACharacter';
import { Container, Row } from 'react-bootstrap';

function NewCharacter(props){
    const { currentUser } = props;

    return(
        <div className="NewCharacter">
            <h1>Create a Character</h1>
            <Container>
                <Row className="text-primary border-3 border-super border-primary">
                    <CreateACharacter currentUser={ currentUser } />  
                </Row>
            </Container>
        </div>
    )
}

export default NewCharacter;