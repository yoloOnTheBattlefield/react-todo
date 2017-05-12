import React, { Component } from 'react';

export default class TodoItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      updatedTask:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  deleteTodo(id){
    this.props.deleteTodo(id)
  }
  editTodo(id){
    this.props.editTodo(id);
  }
  doneTodo(id){
    this.props.doneTodo(id);
  }

  handleChange(){
    const data = this.refs.input.value;
    this.setState({ updatedTask: data });
  }

  handleSubmit(e){
    e.preventDefault();
    if(!this.state.updatedTask){
      return;
    }
    this.props.updateTodo(this.props.todo.id, this.state.updatedTask);
    this.setState({ updatedTask: '' })
  }


  editMode(task){
    return(
      <div>
        <form
          ref='form'
          onSubmit={this.handleSubmit}
          >
          <input
            ref='input'
            placeholder={task}
            onChange={this.handleChange}
           />
        </form>
        <button onClick={this.handleSubmit}>Save</button>
        <button onClick={(id) => this.editTodo(this.props.todo.id)}>Cancel</button>
      </div>
    )
  }

  normalMode(task){
    return(
      <div>
        <span onClick={(id) => this.editTodo(this.props.todo.id)}>{task}</span>
        {
          this.props.todo.done ? (
            <div>
              <button onClick={(id) => this.deleteTodo(this.props.todo.id)}>Delete</button>
            </div>
          ) : (
            <div>
              <button onClick={(id) => this.editTodo(this.props.todo.id)}>Edit</button>
              <button onClick={(id) => this.doneTodo(this.props.todo.id)}>Done</button>
              <button onClick={(id) => this.deleteTodo(this.props.todo.id)}>Delete</button>
            </div>
          )
        }

      </div>
    )
  }

  render(){
    const { id, task, editable } = this.props.todo;
    return (
      <li key={id}>

        {
          editable ?  this.editMode(task) : this.normalMode(task)
        }
      </li>
    )
  }
}
