import React, { Component } from 'react';
import {Row} from "./Row"
export class ParticipantTable extends Component {

constructor() {
  super()
  this.state = {
    sortOrder:1,
    sortBy:null,
    data:[]
  }
}

componentDidMount() {
  console.log(this.props.data)
  this.setState({
    data:this.props.data.slice()
  })
}

onRowEdit(obj) {

  let data = this.state.data.map(el => {
    if( el.id === obj.id ) {
      return obj
    }
    return el;
  })

  this.setState({
    data:data
  })

}


componentWillReceiveProps() {
  this.setState({
    data:this.props.data
  })
}

onRowDelete(obj) {


    let data = this.state.data.filter(el => {
    if( el.id !== obj.id ) {
      return el;
    }

  })

  this.setState({
    data:data
  })

}

sortByHeader(name) {
  this.setState({
    sortOrder:-this.state.sortOrder,
    sortBy:name
  })

}

sort(array) {

  return array.slice().sort((el1,el2)=>{
    let ret = -1
    let sortBy = this.state.sortBy;
    if(el1[sortBy] > el2[sortBy] ) {
      ret = -1
    } else {
      ret = 1
    }
    ret *= this.state.sortOrder
    return ret

  })
}

getTableHeader() {
  if(this.props.display) {
    this.headers = this.props.display
  } else {
    this.headers = []
      for(let name in this.state.data[0] ) {
        this.headers.push(name)
      }
  }

    const ret = (
            <thead key={'thead'}>
              <tr>
                {this.headers.map((header, num) => <td onClick={e=>{this.sortByHeader(header)}} key={num}>{header}</td>)}
              </tr>
            </thead>)
    return ret;
}

getTableBody() {
  let data = this.sort(this.state.data)
  return  (
    <tbody key={'body'}>
     {
       data.map((row, num)=> <Row key={row.id} row={row}
       onEdit={this.onRowEdit.bind(this)}
       onDelete={this.onRowDelete.bind(this)}
       headers={this.headers}></Row>)
     }
   </tbody>
 )
}

render() {
    console.log("render" + this.state.sortOrder)
      return (
        <table className="participant_table">
        {
          [this.getTableHeader(),this.getTableBody()]
        }
        </table>
      )
  }

}
