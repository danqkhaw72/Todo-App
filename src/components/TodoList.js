import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []}
        this.create=this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update=this.update.bind(this)
        this.toggleCompletion=this.toggleCompletion.bind(this)
        this.clearList=this.clearList.bind(this)
    }
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }
    update(id, updateTask) {
        const updateTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: updateTask}
            }
            return todo;
        })
        this.setState({
            todos: updateTodos
        })
    }
    toggleCompletion(id) {
        const updateTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        })
        this.setState({
            todos: updateTodos
        })
    }
    clearList = () => {
        this.setState({
            todos: []
        })
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo key={todo.id} 
            id={todo.id} 
            task = {todo.task} 
            removeTodo={this.remove} 
            updateTodo={this.update}
            completed={todo.completed} 
            toggleTodo={this.toggleCompletion}
            />
        })
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 mx-auto col-md-8 card">
                        <div className="card-body">
                            <h1 className="text-center">Todo Input</h1>
                            <NewTodoForm createTodo={this.create} />
                            
                            <ul className="list-group my-5">
                                <h3 className="text-center">Todo List</h3>
                                {todos}
                                <button type="button" className="btn btn-block btn-danger mt-4" onClick={this.clearList}>Clear List</button>
                            </ul>
                        </div>
                    </div>
                </div>
                <footer class="info">
                    <p>Create by <a href="https://github.com/danqkhaw72">Dang Kham</a></p>
                    <p>Part of <a href="#">Todo App</a></p>
                </footer>
            </div>

            
            
            
        );
    }
}

export default TodoList;
