import React, { Component } from 'react';
import './App.css';
import Form from './form.js';

class App extends Component {
 state ={
   fields : {}
 };
 
onSubmit = fields => {
 this.setState({fields});
 };
  render() {
    return (
      <div className="App">
       < Form onSubmit={fields => this.onSubmit(fields)}/>
       <p>
         <br />
         {JSON.stringify(this.state.fields,null,2)}
       </p>
      </div>
    );
  }
}

export default App;
