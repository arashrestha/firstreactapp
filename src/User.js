import React, { Component } from 'react';

class User extends Component {
	constructor(props){
		super(props)

		this.state={
			name: props.firstName +' '+ props.lastName,
			userName: 'Username'
		}
	}

  render(){
    return (
    	<div>
    	  	<h1 onClick={() => this.handleClick(this.state.name)}>This is {this.props.firstName +' '+ this.props.lastName}.</h1>
    		<p>{this.state.userName}</p>
    		<input name="username" type="text" value={this.state.userName} onChange={(event) => this.handleChange(event)}/>
    	</div>
    );
  }
  	
  	handleClick = function(){
  		alert(this.state.name+ ' Clicked')
	}

	handleChange = function(event) {
		this.setState({
			userName: event.target.value
		})
	}
}

// const handleClick = function(name){
// 	alert(name+ ' Clicked....')
// }

export default User;