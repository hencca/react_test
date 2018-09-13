import React, { Component } from 'react';
import {Row} from "./Row";
import "./ParticipantTable.css";
export class ParticipantTable extends Component {

constructor() {
  super()
  this.state = {
    sortOrder:1,
    sortBy:null,
  };
}

componentDidMount() {
  this.setState({
    data:this.props.data.slice()
  })
}

onRowEdit(obj) {

  let data = this.props.data.map(el => {
    if( el.id === obj.id ) {
      return obj;
    }
    return el;
  });

  this.props.onUpdate(data);
}

onRowDelete(obj) {
    let data = this.props.data.slice().filter(el => {
      if( el.id !== obj.id ) {
        return el;
      }
    })
    this.props.onUpdate(data);
}

sortByHeader(name) {
  this.setState({
    sortOrder: -this.state.sortOrder,
    sortBy:name
  });
}

sort(array) {
  return array.slice().sort((el1,el2)=>{
    let ret = -1
    let sortBy = this.state.sortBy;
    if( el1[sortBy] > el2[sortBy] ) {
      ret = -1;
    } else {
      ret = 1;
    }
    ret *= this.state.sortOrder
    return ret;
  });
}

getTableHeader() {
  if(this.props.display) {
    this.headers = this.props.display;
  } else {
    this.headers = []
      for(let name in this.props.data[0] ) {
        this.headers.push(name);
      }
  }

  let labels = this.headers;

  if(this.props.labels) {
    labels = this.props.labels;
  }

    const ret = (
            <div className="row header" key={'thead'}>

                {this.headers.map((header, num) => <div className="col"
                  onClick={e=>{this.sortByHeader(header)}} key={num}><p>{labels[num]}</p></div>)}
                <div className="col"></div>
            </div>

          )
    return ret;
}


getTableBody() {
  let data = this.sort(this.props.data)
  return  (
    <div key={'body'}>
     {
       data.map((row, num)=> <Row key={row.id} row={row}
       onEdit={this.onRowEdit.bind(this)}
       onDelete={this.onRowDelete.bind(this)}
       headers={this.headers}></Row>)
     }
   </div>
 )
}

render() {
      return (
        <div className="participant_table">
        {
          [this.getTableHeader(),this.getTableBody()]
        }
      </div>
      )
  }
}
