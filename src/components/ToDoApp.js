import React, { Component } from 'react';
import ToDo from './ToDo';
import AddItem from './AddItem';

// Ernest Chiu
class ToDoApp extends Component {
  state = {
    todos:[
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'buy eggs'},
    ]
  }
  deleteItem = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }

  AddItem = (todo) =>{
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <ToDo todos={this.state.todos} deleteItem={this.deleteItem}/>
        <AddItem todo={this.AddItem}/>
        <a href="https://github.com/ErnestChiu2023/todoApp">Check out this project on github!</a>
      </div>

    );
  }
}

export default ToDoApp;
