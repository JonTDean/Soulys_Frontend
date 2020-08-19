import React from 'react';
import ShowUserCharacters from './ShowCharacters/ShowUserCharacters';
import { Container, Row } from 'react-bootstrap';

function CharacterView(props){
    const { currentUser } = props;

    return(
        <div className="CharacterView">
            <div className="hasCharacters m-5 p-3 rounded" style={{backgroundColor: "silver"}}>
                <h1 className="border rounded " style={{backgroundColor: "white"}}> My Current Characters </h1><br />
                <Container>
                    <Row className="text-primary border-3 border-super border-primary">
                        <ShowUserCharacters currentUser={ currentUser } className='span3 offset2 m-2' />
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default CharacterView;