import React, {Component} from 'react'

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
    return (<div>
      <label>Name</label>
      <input ref="name" type="text"></input>
      <label>Email</label>
      <input ref="email" type="text"></input>
      <label>Phone</label>
      <input ref="phone" type="text"></input>
      <button onClick={this.submit.bind(this)}>Add New</button>
      </div>
    )
  }
}
