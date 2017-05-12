import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './styles/TodoItem.css';

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
    this.props.deleteTodo(id);
  }
  editTodo(id){
    this.props.editTodo(id);
  }
  doneTodo(id){
    this.props.doneTodo(id);
  }

  handleChange(){
    const data = this.refs.input.value;
    this.setState({ updatedTask: data.trim() });
  }

  handleSubmit(e){
    e.preventDefault();
    if(!this.state.updatedTask){
      return;
    }
    this.props.updateTodo(this.props.todo.id, this.state.updatedTask);
    this.setState({ updatedTask: '' });
  }


  editMode(task){
    return(
      <div className='flex-item'>
        <form
          ref='form'
          onSubmit={this.handleSubmit}
          className='content'
          >
          <input
            ref='input'
            placeholder={task}
            onChange={this.handleChange}
           />
        </form>
        <div className='buttons' >
          <button onClick={this.handleSubmit}>
            <FontAwesome name='life-ring' />
          </button>
          <button onClick={(id) => this.editTodo(this.props.todo.id)}>
            <FontAwesome name='ban' />
          </button>
        </div>
      </div>
    )
  }

  normalMode(task){
    return(
      <div className='flex-item'>
        <span
          className='content'
          onClick={(id) => this.editTodo(this.props.todo.id)}>{task}</span>
        {
          this.props.todo.done ? (
            <div className='buttons'>
              <button onClick={(id) => this.deleteTodo(this.props.todo.id)}>Delete</button>
            </div>
          ) : (
            <div className='buttons' >
              <button onClick={(id) => this.editTodo(this.props.todo.id)}>
                <FontAwesome name='pencil' />
              </button>
              <button onClick={(id) => this.doneTodo(this.props.todo.id)}>
                <FontAwesome name='check' />
              </button>
              <button onClick={(id) => this.deleteTodo(this.props.todo.id)}>
                <FontAwesome name='trash-o' />
              </button>
            </div>
          )
        }
      </div>
    )
  }

  render(){
    const { id, task, editable } = this.props.todo;
    return (
      <li key={id} className='TodoItem'>
        {
          editable ?  this.editMode(task) : this.normalMode(task)
        }
      </li>
    )
  }
}
