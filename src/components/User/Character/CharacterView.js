import React from 'react';
import ShowUserCharacters from './ShowCharacters/ShowUserCharacters';
import { Container, Row } from 'react-bootstrap';

function CharacterView(props){
    const { currentUser } = props;

    return(
        <div className="CharacterView">
            <div className="hasCharacters">
                <h1> My Current Characters </h1>
                <Container>
                    <Row className="text-primary border-3 border-super border-primary">
                        <ShowUserCharacters currentUser={ currentUser } className='span3 offset2' />
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default CharacterView;