import React from 'react';

function Home(props){

    return(
        <div>
            {<p> Welcome{props.currentUser ? `, ${props.currentUser.username}!` : '!'} </p>}
        </div>
    )

}

export default Home;