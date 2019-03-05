import React from 'react';

export default class Form extends React.Component{
    
  state = {
      firstName:"",
      lastName:"",
      userName:"",
      email:"",
      password:"",
    };

onSubmit =(e) => {
e.preventDefault();
this.props.onSubmit(this.state);
console.log(this.state);
this.setState({
  firstName:"",
  lastName:"",
  userName:"",
  email:"",
  password:"",

})

};

render(){

  return(
    <div> 
    <form>
      <input placeholder="First Name" value={this.state.firstName}
      onChange ={ e => this.setState({firstName :e.target.value })}
       />
      <br />
      <br />
      <input placeholder="Last Name" value={this.state.lastName}
      onChange ={ e => this.setState({lastName : e.target.value})}
      />
      <br />
      <br />
      <input placeholder="User Name" value={this.state.userName}
      onChange ={ e => this.setState({userName : e.target.value})}
      />
      <br />
      <br />
      <input placeholder="Email" value={this.state.email}
      onChange ={ e => this.setState({email : e.target.value})}
      />
      <br />
      <br />
      <input placeholder="Password" value={this.state.password}
      onChange ={ e => this.setState({password : e.target.value})}
      />
      <br />
      <br />
      <button onClick = {(e)=> this.onSubmit(e)}>Submit</button>

    </form>
    </div>
  );

}

}
