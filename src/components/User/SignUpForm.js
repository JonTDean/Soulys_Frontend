import React, { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// eslint-disable-next-line
import { getUPA, reducer, profileImageBase, handleChange } from '../Site/Utilities/UserUtil';
import { handleSignUpForm } from '../Site/Fetch_Requests/User_Fetch_Requests';

// Pseudo State
const initialState = {
    username: '',
    password: '',
    password_confirmation: '',
}

// Responsible for User SignUp
export default function SignUpForm(props) {
    // Handles Dynamic States
    const [state, dispatch] = useReducer(reducer, initialState);

    // Sets initial states as a destructured Object
    const { username, password, password_confirmation, avatar } = state 

    return(
        <Form onSubmit={e => handleSignUpForm(e, state, props.handleLogin )}> 
            {/* {console.log(props.handleLogin)} */}

            {/* Displays Current Username/Password/Avatar Info */}
            {/* {getUPA(username, password, avatar)} */}

            {/* Username */}
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text" 
                    name="username" 
                    autoComplete="off" 
                    value={username} 
                    placeholder="JohnDoe123" 
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

            {/* Password Confirmation */}
            <Form.Group controlId="Password">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                    type="password" 
                    name="password_confirmation" 
                    value={password_confirmation} 
                    onChange={ e => handleChange(e, dispatch) }
                />
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit">
                Sign Up
            </Button>

        </Form>
    );
}
