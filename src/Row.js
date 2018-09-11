import React, {Component} from 'react'

export class Row extends Component{

constructor() {
  super();
  this.state = {
    editing:false,
  }
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
                    <tr>
                    {
                      this.props.headers.map((el, num)=><td key={num}>{this.props.row[el]}</td>)
                    }
                    <td key="2">
                      <button onClick={this.edit.bind(this)}>Edit</button>
                      <button onClick={this.delete.bind(this)}>Del</button>
                    </td>
                    </tr>
      )

      let editingrender = (
        <tr>
        {
          this.props.headers.map((el,num)=><td key={num}><input type="text" ref={el} defaultValue={this.props.row[el]}></input></td>)
        }
        <td>
        <button onClick={this.cancel.bind(this)}>Cancel</button>
        <button onClick={this.save.bind(this)}>Save</button>

        </td>
        </tr>
      )

      if(!this.state.editing) {
        return normal
      } else {
        return editingrender
      }

  }

}
