import React from 'react';
import { Link } from "react-router-dom";
import {Navbar, Nav, Button, Dropdown} from 'react-bootstrap';
import Logo from '../../../../assets/Site/soulys_brand.svg';


export default function NavBar(props){
    const { currentUser } = props
    return(
        <Navbar variant="secondary" className="d-flex justify-content-center">
            <Navbar.Brand><Link to ="/"><img src={Logo} alt="Logo" /></Link></Navbar.Brand>
            {currentUser ? (
                <Nav className="ml-auto">  
                        {/* Play Button */}
                        <Nav className="mr-5"><Link to="/Game"><Button>Play</Button></Link></Nav>

                        {/* Drop Down for the Character Menu */}
                        <Dropdown>
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

                        {/* Profile Button */}
                        <Nav><Link to="/Profile"><Button>Profile Settings</Button></Link></Nav>

                        {/* Logout Button */}
                        <Button className="ml-5" onClick={props.handleLogout}>Logout</Button> 
            
                </Nav>
            ) : (
                <Nav className="ml-auto">

                    <Nav className="ml-3"><Link to ="/SignUp">Sign Up</Link></Nav>
                    
                    <Nav className="ml-3"><Link to ="/Login">Login</Link></Nav>
                
                </Nav>
            )}
        </Navbar>

    )
}