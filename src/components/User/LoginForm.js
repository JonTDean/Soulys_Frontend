import React, { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { reducer, handleChange } from '../Site/Utilities/UserUtil';
import { handleLoginForm } from '../Site/Fetch_Requests/User_Fetch_Requests';

// Pseudo State
const initialState = {
    username: '',
    password: '',
}

// Responsible for User SignUp
export default function LoginForm(props){
    // Handles Dynamic States
    const [state, dispatch] = useReducer(reducer, initialState);

    // Sets initial states as a destructured Object
    const { username, password } = state


    return(
        <Form onSubmit={ e => handleLoginForm(e, state, props.handleLogin )}>
            
            {/* Username */}
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type="text" 
                    name="username" 
                    autoComplete="off" 
                    value={username} 
                    onChange={ e => handleChange(e, dispatch) }
                />
            </Form.Group>

            {/* Password */}
            <Form.Group controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={ e => handleChange(e, dispatch) }
                />
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit">
                Login
            </Button>
        </Form>
    )
}