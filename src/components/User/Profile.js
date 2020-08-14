import React, { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { reducer, handleChange } from '../Site/Utilities/UserUtil';
import { handleUpdateForm, handleDeleteUser } from '../Site/Fetch_Requests/User_Fetch_Requests';

// Pseudo State
const initialState = {
    username: '',
    password: '',
}

// Responsible for User SignUp
export default function Profile(props){
    // console.log(props)
    const [state, dispatch] = useReducer(reducer, initialState);
    const { currentUser, token } = props
    // State Props ARE Being used ignore warning value
    // eslint-disable-next-line
    const { username, password, avatar } = state

    return(
        <Form onSubmit={ e => handleUpdateForm(e, state, token)}>
            <h1>{currentUser.username}'s Profile</h1>

            {/* Username */}
            <Form.Group controlId="username">
                <Form.Label>Change Username</Form.Label>
                <Form.Control
                    type="text" 
                    name="username" 
                    autoComplete="off" 
                    placeholder={currentUser.username} 
                    onChange={ e => handleChange(e, dispatch) }
                    />
            </Form.Group>
    
            {/* Password */}
            <Form.Group controlId="Password">
                <Form.Label>Change Password</Form.Label>
                <Form.Control
                    type="password" 
                    name="password" 
                    autoComplete="off" 
                    onChange={ e => handleChange(e, dispatch) }
                />
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit">
                Edit Profile
            </Button>

            {/* Delete Button */}
            <Button type="submit" onClick={e => handleDeleteUser(e, token, props.handleLogout())}>
                Delete Profile
            </Button>
        </Form>
    )
}