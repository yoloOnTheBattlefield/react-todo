import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          task: 'Buy Milk',
          done: false,
          id: 1,
          editable: false
        },
        {
          task: 'Pet The Cat',
          done: false,
          id: 2,
          editable: false
        },
        {
          task: 'Make Anonymous Phone Calls',
          done: false,
          id: 3,
          editable: false
        }
      ]
    }
  }

  addTodo(newTodo){
    this.setState({
      todos: this.state.todos.concat(newTodo)//let's not forget about immutability
    })
  }

  deleteTodo(id){
    this.setState({
      todos: this.state.todos.filter(item => {
        return id !== item.id
      })
    })
  }

  doneTodo(id){
    this.setState({
      todos: this.state.todos.map(item => {
        if(item.id === id){
          return Object.assign({}, item, { done: true });
        }else{
          return item;
        }
      })
    })
  }

  editTodo(id){
    this.setState({
      todos: this.state.todos.map(item => {
        if(item.id === id){
          return Object.assign({}, item, { editable: item.editable ? false : true })
        }else{
          return item
        }
      })
    });
  }

  updateTodo(id, newTask){
    this.setState({
      todos: this.state.todos.map(item => {
        if(item.id === id){
          return Object.assign({}, item,{ task: newTask, editable: false })
        }else{
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <TodoList
          todos={this.state.todos}
          deleteTodo={(id) => this.deleteTodo(id)}
          editTodo={(id) => this.editTodo(id)}
          updateTodo={(id, newTask) => this.updateTodo(id, newTask)}
          doneTodo={(id) => this.doneTodo(id)}
          />
        <TodoForm
          addTodo={(newTodo) => this.addTodo(newTodo)}
          />
      </div>
    );
  }
}

export default App;
