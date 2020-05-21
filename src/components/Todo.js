import React, { Component } from 'react'
import './css/Todo.css'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    }
    this.handleRemove=this.handleRemove.bind(this)
    this.toggleForm=this.toggleForm.bind(this)
    this.handleUpdate=this.handleUpdate.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.handleToggle=this.handleToggle.bind(this)
  }
  handleRemove() {
    this.props.removeTodo(this.props.id)
  }
  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }
  handleUpdate(event) {
    event.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({
      isEditing: false
    })
  }
  handleChange(event) {
    this.setState({
        [event.target.name] : event.target.value
    })
  }
  handleToggle(event) {
    this.props.toggleTodo(this.props.id)
  }
  render() {
    let result;
    if(this.state.isEditing) {
      result = <div>
        <form onSubmit={this.handleUpdate}>
          <input 
          type="text"
          className="form-control" 
          value={this.state.task}
          name="task"
          onChange={this.handleChange}
          />
          <button className="btn btn-info mt-2">Save</button>
        </form>
      </div>
    } else {
      result = (
        <div>
          <li className="list-group-item d-flex justify-content-between my-2" >
            <span className={this.props.completed ? "completed" : ""} onClick={this.handleToggle}>{this.props.task}</span>
            <div className="todo-icon">
              <span className="text-primary"><i className="fa fa-pencil " onClick={this.toggleForm} /></span>
              <span className="text-danger"><i className="fa fa-trash" onClick={this.handleRemove} /></span>
            </div>
          </li>
          
        </div>
      )
    }
    return result;
  }
}

export default Todo;
