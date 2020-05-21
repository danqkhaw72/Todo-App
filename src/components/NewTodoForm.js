import React, { Component } from 'react'
import {v4 as uuid} from 'uuid'

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit(event) {
      event.preventDefault();
      this.props.createTodo({...this.state, id: uuid(), completed: false})
      this.setState({
        task: ''
      })
    }
  render() {
    return (
      
        <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <div className="input-group-append">
                <div className="input-group-text bg-primary text-white">
                  <i className="fa fa-book" />
                </div>
              </div>
              <input type="text" 
              className="form-control"
              placeholder="New Todo" 
              id="task" 
              name="task" 
              value={this.state.task} 
              onChange={this.handleChange} 
              />
            </div>
            <button className="btn btn-block btn-success mt-3">Add Todo</button>
        </form>
     
    );
  }
}

export default NewTodoForm;
