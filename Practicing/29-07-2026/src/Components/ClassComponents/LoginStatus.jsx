import React, { Component } from 'react'

export class LoginStatus extends Component {
    constructor(props){
        super(props);
        this.state={
            loggedIn: false
        }
    }

    toggleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  };

  render() {
    return (
      <div>
        
          <h2>
          {this.state.loggedIn
            ? "User is Logged In"
            : "User is Logged Out"}
        </h2>

        <button onClick={this.toggleLogin}>
          {this.state.loggedIn ? "Logout" : "Login"}
        </button>

      </div>
    )
  }
}

export default LoginStatus
