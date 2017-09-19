import React, { Component } from 'react';
import './App.css';
import UserCard from './UserCard';

// TEMPORARY FUNCTIONS:

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

function UserGreeting(props){
  return <h1> you are logged in </h1>;
}

function GuestGreeting(props){
  return <h1> you are not logged in </h1>;
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

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

    if (isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick} />
      usercard = <UserCard />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div className="container">
        {/* this.state... login/user card */}
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        {usercard}
      </div>
    );
  }
}

export default SpotifyContainer;
