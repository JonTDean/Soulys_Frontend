import React from 'react';
import CreateACharacter from './CreateCharacters/CreateACharacter';
import { Container, Row } from 'react-bootstrap';

function NewCharacter(props){
    const { currentUser } = props;

    return(
        <div className="NewCharacter m-5 p-3 rounded" style={{backgroundColor: "silver"}}>
            <h1 className="border rounded " style={{backgroundColor: "white"}}>Create a Character</h1>
            <Container>
                <Row className="text-primary border-3 border-super border-primary">
                    <CreateACharacter currentUser={ currentUser } />  
                </Row>
            </Container>
        </div>
    )
}

export default NewCharacter;