import React, { Component }  from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import NavBar from './components/Site/Static/NavBar/NavBar';
import SignUpForm from './components/User/SignUpForm';
import LoginForm from './components/User/LoginForm';
import Profile from './components/User/Profile';
import Home from './components/Site/home';
import Main from './components/Game/Main';
import CharacterView from './components/User/Character/CharacterView';
import NewCharacter from './components/User/Character/NewCharacter';
import ModifyCharacters from './components/User/Character/ModifyCharacters/ModifyCharacters';
import { handleLoginPersist } from './components/Site/Fetch_Requests/User_Fetch_Requests';
import { currentUserExists } from './components/Site/Utilities/UserUtil';

class App extends Component {
  state = {
    currentUser: null,
  }

  // Logs In user
  componentDidMount(){
    if(localStorage.token){
      handleLoginPersist(`profile/autologin/`, this.handleLogin, localStorage.token);
    }
  }

  // Handles User Login
  handleLogin = currentUser => {

    if(currentUser === undefined){
      this.props.history.push('/login');
    }else if(currentUser.message){
      this.props.history.push('/login');
    }else{
      this.setState({ currentUser }, () => {
        this.props.history.push('/');
      })
    }


  }

  // Handles User Logout
  handleLogout = () => {
    // Remove USER TOKEN
    localStorage.removeItem("token");
    
    // Remove State
    this.setState({
      currentUser: null
    })

    this.props.history.push('/');
  }

  render(){
    const { currentUser } = this.state;
    // console.log(`currentUser:`, currentUser);
    // console.log(`Current Local Storage ID:${localStorage.token}` );

    return (
      <>
        <NavBar currentUser={ currentUserExists(currentUser) } handleLogout={this.handleLogout} />

        <Switch>

          {/* Log In Page */}
          <Route exact path="/login">
            <LoginForm handleLogin={this.handleLogin} currentUser={ currentUserExists(currentUser, this.handleLogout) } />
          </Route>

          {/* Sign Up Page */}
          <Route exact path="/SignUp">
            <SignUpForm handleLogin={this.handleLogin} currentUser={ currentUserExists(currentUser, this.handleLogout) } />
          </Route>

          {/* Profile Page */}
          <Route exact path="/Profile">
            <Profile currentUser={ currentUserExists(currentUser, this.handleLogout) } token={localStorage.token} handleLogout={this.handleLogout} location={this.props.location} />
          </Route>

          {/* Game Page */}
          <Route exact path="/Game"> {/* currentUserExists returns the currentUser name not the full return value */}  
            <Main currentUser={ currentUserExists(currentUser, this.handleLogout) } token={localStorage.token} />
          </Route>

          {/* Character Creation Page */}
          <Route exact path="/Game/Characters/View"> {/* currentUserExists returns the currentUser name not the full return value */}  
            <CharacterView currentUser={ currentUserExists(currentUser, this.handleLogout) } />
          </Route>

          {/* New Character Page */}
          <Route exact path='/Game/Characters/New'>
            <NewCharacter currentUser={ currentUserExists(currentUser, this.handleLogout) } />
          </Route>

          {/* Edit Character Page */}
          <Route exact path='/Game/Characters/Modify'>
            <ModifyCharacters currentUser={ currentUserExists(currentUser, this.handleLogout) } />
          </Route>

          {/* Home Page */}
          <Route exact path="/">
            <Home currentUser={ currentUserExists(currentUser, this.handleLogout) } />
          </Route>

        </Switch>
      </>
    );
  }
}

export default withRouter(App);