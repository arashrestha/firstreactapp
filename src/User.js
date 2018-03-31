import React, { Component } from 'react';

class User extends Component {
  render(){
    return (
      <h1>This is {this.props.name}.</h1>
    );
  }
}

export default User;