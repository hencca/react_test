import React, {Component} from 'react';
import trash from "./img/trash.gif";
import edit from "./img/edit.gif";
export class Row extends Component{

constructor() {
  super();
  this.state = {
    editing:false,
  };
}

edit() {
  this.setState({
    editing:true
  })
}

delete() {
    this.props.onDelete(this.props.row)
}

cancel() {
  this.setState({
    editing:false
  })
}

save() {
  let row = this.props.row
  for(let name in this.refs ) {
    this.props.row[name] = this.refs[name].value
  }

  this.props.onEdit(row)
  this.setState(
    {editing:false}
  )
}

  render() {

    let normal =  (
                    <div className="row">
                    {
                      this.props.headers.map((el, num)=><div className="col" key={num}><p>{this.props.row[el]}</p></div>)
                    }
                    <div className="col" key="2">
                      <button className="btn-icon btn-edit" onClick={this.edit.bind(this)}>
                      <img width="30" height="30" src={edit}></img></button>
                      <button className="btn-icon btn-trash" onClick={this.delete.bind(this)}>
                      <img width="30" height="30" src={trash}></img>
                      </button>
                    </div>
                    </div>
      )

      let editingrender = (
        <div className="row">
        {
          this.props.headers.map((el,num)=><div className="col" key={num}>
          <input type="text" ref={el} defaultValue={this.props.row[el]}></input></div>)
        }
        <div className="col">
          <button className="btn btn-2" onClick={this.cancel.bind(this)}>Cancel</button>
          <button className="btn btn-ok" onClick={this.save.bind(this)}>Save</button>
          </div>
        </div>
      )

      if(!this.state.editing) {
        return normal
      } else {
        return editingrender
      }

  }

}
