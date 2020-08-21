// Basic Utilities to help out

//// I sure as hell aint changing every link once I deploy to netlify
//// For Localhost
// `https://soulys.herokuapp.com/${route}`
export function BaseURL(route){
    return(
        `http://localhost:3000/${route}` 
        // `http://soulys.herokuapp.com/${route}`
    )
}

// Grabs Username/Password/Avatar Data 
export function getUPA(username, password, avatar){
    console.log(`Username: ${username}, Password: ${password}, Avatar: ${avatar}`)
}
// GLOBAL Dynamic Hook Function Setter 
export function reducer( state, { field, value } ){
    return{
        ...state,
        [field]: value
    }
}

// Handles Dynamic State Creation for Hooks
export function handleChange(e, dispatch){
    dispatch( { field: e.target.name, value: e.target.value } )
}

// Checks if the current user exists so the App stops crashing
export function currentUserExists(currUser, logout){
    if(currUser){
        return currUser;
    }else{
        return logout;
    }
}

//Basic Profile Image
export const profileImageBase = "https://project-pure-beyond.s3.amazonaws.com/Soulys/Site/haunting.png";

export function characterImageBase(physique){
    return `https://project-pure-beyond.s3.amazonaws.com/Soulys/Site/CharacterPhysique/${physique}.svg`
} 
