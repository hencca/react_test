import React, { Component } from 'react';
import {ParticipantTable} from './ParticipantTable'
import {Form} from './Form'
import logo from './logo.svg';
import './App.css';

let data = [
  {
    id:23,
    name:"First",
    email:"hi@ko.com",
    phone_number:"32332",
  },
  {
    email:"hwwi@ko.com",
    name:"Henkka",
    id:2,
    phone_number:"333223332"
  },
  {
    email:"hwwi@ko.com",
    name:"Anu",
    id:4,
    phone_number:"333223332"
  },
  {
    email:"hwwi@ko.com",
    name:"Jukka",
    id:24,
    phone_number:"333223332"
  }
];


class App extends Component {

constructor() {
  super();
  this.state = {
    data:data
  }
}

updateStuff(msg) {
  alert(msg)
}

addNewParticipant(obj) {
  let data = this.state.data
  data.push(obj)
  this.setState({
    data:data
  })
}

  render() {
  
    return (
      <div className="App">
        <Form submitHandler={this.addNewParticipant.bind(this)}></Form>
        <ParticipantTable data={this.state.data} display={["name", "email", "phone_number"]}></ParticipantTable>
      </div>
    );
  }
}

export default App;
