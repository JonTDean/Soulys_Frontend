import { BaseURL } from '../../Site/Utilities/UserUtil';

// Handles User Sign Up Fetch
export function handleSignUpForm(e, state, login){
    e.preventDefault();

    fetch(BaseURL(`profile/signup`), {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(state)
    })
    .then(resp => resp.json())
    .then(data => {
        const {user, token} = data

        // SETS USER STATE
        login(user)
        
        // Saves Token to Local Storage
        localStorage.token = token
    })
};

// Handles User Login Fetch
export function handleLoginForm(e, state, login){
    e.preventDefault();

    fetch(BaseURL('profile/login'), {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(state)
    })
    .then(resp => resp.json())
    .then(data => {
        // console.log(`DATA:`, data)
        const { user, token } = data
        // SETS USER STATE
        login(user)
        // Saves Token to Local Storage
        localStorage.token = token;
    })
}

// Handles User Login Persistence
export function handleLoginPersist(url, login, token){
    fetch(BaseURL(url),{
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    })
    .then(resp => resp.json())
    .then(data => {
    // SETS USER STATE
        if(!data.error){
            login(data)
        }

    })
}

// Handles User Update Fetch
export function handleUpdateForm(e, state, token){
    e.preventDefault();

    fetch(BaseURL('profile/edit'), {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        },
        body:JSON.stringify(state)
    })
    .then(resp => resp.json())
    .then(console.log)
}

// Handles User Delete Fetch
export function handleDeleteUser(e, token, logout){
    e.preventDefault();
    
    fetch(BaseURL('profile/delete'),{
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(resp => resp.json())
    .then(console.log)

    return logout;
}