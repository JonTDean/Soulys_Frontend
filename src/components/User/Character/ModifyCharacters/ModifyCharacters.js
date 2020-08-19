import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PopulateCharacters from '../ShowCharacters/PopulateCharacters';

function ModifyCharacters(props){    
    // Destructure Characters out of props
    const characters = props.currentUser.characters;
    
    // console.log(characters);
    
    // ANTI-SITE BREAKING CODE
    if(characters){
       return (
        <div className="modifyCharacters m-5 p-3 rounded" style={{backgroundColor: "silver"}} >
            <h1 className="border rounded " style={{backgroundColor: "white"}} >Edit My Characters</h1>
            <Container>
                <Row className="text-primary border-3 border-super border-primary mt-2">
                    {/* Characters get Mapped from here to display to the screen. */}
                    {characters.map(character => {
                        return(
                            <PopulateCharacters key={character.id.toString()} characters={character} buttonType={'modify'} />
                        )
                    })}
                </Row>
            </Container>
        </div>
        
        )
   }else{
       return null;
   }
}

export default ModifyCharacters;