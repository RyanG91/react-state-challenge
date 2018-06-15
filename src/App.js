import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Event.js';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      seconds: 0,
      logins: 0,
      user: props.username,
      buttonText: 'Log In',
      timeStampLogOut: [],
      timeStampLogIn: [],
    }
  }

  toggleLog = () => {
    if (this.state.buttonText === 'Log In') {
      this.setState({ user: 'Admin', buttonText: 'Log Out', logins: this.state.logins +1, timeStampLogIn: [(new Date().toString()), ...this.state.timeStampLogIn]})
    } else {
      this.setState({ user: 'Ryan', buttonText: 'Log In', timeStampLogOut: [(new Date().toString()), ...this.state.timeStampLogOut]})
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>


        <p className="App-intro">
          You have been here for { this.state.seconds } seconds
        </p>
          <p>Hello, { this.state.user }</p>
          <button onClick={ this.toggleLog }>{ this.state.buttonText }</button>
          <p>You have logged in { this.state.logins } times</p>
          <p>Timestamp Logout: { this.state.timeStampLogOut }</p>
          <p>Timestamp Login: { this.state.timeStampLogIn }</p>
      </div>
    );
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 })
    }, 1000)
  }
}

export default App;
