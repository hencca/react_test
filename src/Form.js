import React, {Component} from 'react'
import './Form.css';

export class Form extends Component{

submit() {
  console.log(this.refs['name'].value)
    //Todo: handle som basic validation
    this.props.submitHandler({
      name:this.refs['name'].value,
      email:this.refs['email'].value,
      phone_number:this.refs['phone'].value,
    })
}

  render(){
    return (<div className="form row">
      <div className="col"><input ref="name" type="text" placeholder="Full Name"></input></div>
          <div className="col"><input ref="email" type="text" placeholder="Email"></input></div>
          <div className="col"><input ref="phone" type="text" placeholder="Phone number"></input></div>
          <div className="col"><button className="btn" onClick={this.submit.bind(this)}>Add New</button></div>
      </div>
    )
  }
}
