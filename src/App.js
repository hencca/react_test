import React, { Component } from 'react';
import {ParticipantTable} from './ParticipantTable';
import {Form} from './Form';
import logo from './img/logo.gif';
import './App.css';
import data from "./data/data";



class App extends Component {

constructor() {
  super();
  this.state = {
    data:data
  };
}

updateTable(data) {
    this.setState({
      data
    });
}

getNextId(data) {
  let num =  0;
  data.forEach(el=> {
    if(el.id > num) {
      num = el.id;
    }
  })
  return num + 1;
}

addNewParticipant(obj) {
  let data = this.state.data;

  obj.id = this.getNextId(data)

  data.push(obj)
  this.setState({
    data:data
  });
}

  render() {

    return (
      <div className="App">
        <header><div className="logo"><h2>
          <img className="icon" src={logo}></img>Nord Software</h2></div></header>

        <div className="inner-wrapper">
        <h1>List of participants</h1>
        <Form submitHandler={this.addNewParticipant.bind(this)}></Form>
        <ParticipantTable onUpdate={this.updateTable.bind(this)} data={this.state.data}
          labels={["Name", "E-mail address", "Phone number"]}
          display={["name", "email", "phone_number"]}></ParticipantTable>
      </div>
    </div>
    );
  }
}

export default App;
