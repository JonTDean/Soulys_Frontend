import React from 'react';
import { Link } from "react-router-dom";
import {Navbar, Nav, Button, Dropdown} from 'react-bootstrap';
import Logo from '../../../../assets/Site/Brand.svg';


export default function NavBar(props){
    const { currentUser } = props
    return(
        <Navbar bg="secondary" variant="secondary" className="text-align-center">
            <Navbar.Brand><Link to ="/"><img src={Logo} alt="Logo" /></Link></Navbar.Brand>
            {currentUser ? (

            <Nav className="mr-auto">

                <Dropdown className="ml-3">

                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Character Settings
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='p-3 border-3 border-super border-primary'>
                        <div>
                            <Link to="/Game/Characters/View" >My Characters</Link>
                        </div>

                        <div>
                            <Link to="/Game/Characters/New" >Create a Character</Link>
                        </div>

                        <div>
                            <Link to="/Game/Characters/Modify" >Edit a Character</Link>
                        </div>
                    </Dropdown.Menu>
                    
                </Dropdown>
                
                <Nav className="ml-3"><Link to="/Profile">Profile</Link></Nav>

                <Nav className="ml-3"><Link to="/Game">Play</Link></Nav>

                <Button onClick={props.handleLogout} className="ml-3">Logout</Button>
            
            </Nav>
            ) : (
            <Nav className="mr-auto">

                
                <Nav className="ml-3"><Link to ="/SignUp">Sign Up</Link></Nav>
                
                <Nav className="ml-3"><Link to ="/Login">Login</Link></Nav>
            
            </Nav>
            )}
        </Navbar>

    )
}