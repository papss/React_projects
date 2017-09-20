import React, { Component } from 'react';
import './App.css';
import Splash from './Splash';
import UserCard from './UserCard';

// TEMPORARY LOGIN/OUT FUNCTIONS:

function LoginButton(props){
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props){
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// function UserGreeting(props){
//   return <h1> you are logged in </h1>;
// }
//
// function GuestGreeting(props){
//   return <h1> you are not logged in </h1>;
// }
//
// function Greeting(props){
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   } else {
//     return <GuestGreeting />;
//   }
// }

// CONTAINER COMPONENT?:

class SpotifyContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    let usercard = null;
    let splash = null;

    if (isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick} />
      usercard = <UserCard />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
      splash = <Splash />
    }

    return (
      <div className="container">
        {splash}
        {button}
        {usercard}
      </div>
    );
  }
}

export default SpotifyContainer;
