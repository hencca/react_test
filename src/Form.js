import React, {Component} from 'react'
import './Form.css';

export class Form extends Component{

constructor() {
  super();
  this.state = {
    errors:{
    }
  }
}

submit() {


    this.props.submitHandler({
      name:this.refs['name'].value,
      email:this.refs['email'].value,
      phone_number:this.refs['phone'].value,
    })
}

validator(input,which) {
  switch (which) {
    case "email":
      return input.indexOf("@") > -1
      break;
    default:

  }
}

validate(e) {
  let type = e.target.dataset.type;
  let er = this.state.errors
  er[type] = ! this.validator(e.target.value, type)


    this.setState({
      errors:er
    })

}

  render(){
    return (<div className="form row">
      <div className="col">
        <input ref="name" type="text" placeholder="Full Name"></input></div>
          <div className="col">
            <input data-type="email" className={this.state.errors.email ? "error" : "" } onBlur={this.validate.bind(this)} ref="email" type="text" placeholder="Email"></input></div>
          <div className="col"><input data-type="phone" className={this.state.errors.phone ? "error" : "" }  ref="phone" type="text" placeholder="Phone number"></input></div>
          <div className="col"><button  className="btn" onClick={this.submit.bind(this)}>Add New</button></div>
      </div>
    )
  }
}
