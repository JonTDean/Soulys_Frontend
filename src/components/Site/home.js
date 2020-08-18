import React from 'react';

function Home(props){

    return(
        <div>
            {<p className={"text-primary"}> Welcome{props.currentUser.username ? `, ${props.currentUser.username}!` : '!'} </p>}
        </div>
    )

}

export default Home;