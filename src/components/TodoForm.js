import React, { Component } from 'react'

class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      task: ''
    }
  }

  //generates an unique id for every task created
  generateUniqueId(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //updates the task with the value of the input
  handleChange(e){
    var data = this.refs.input.value;
    this.setState({
      task: data
    });
  }

  //this calls the addTodo prop with a new task
  handleSubmit(e){
    e.preventDefault();

    const task = this.refs.input.value;
    if(!task){
      return;
    }

    this.props.addTodo({
      task: task,
      done: false,
      id: this.generateUniqueId(0, 9999),
      editable: false
    });
    this.setState({
      task: ''
    })
  }



  render () {
    return(
      <div className='TodoForm'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type='text'
            ref='input'
            onChange={this.handleChange.bind(this)}
            value={this.state.task}
          />
          <button type='submit'>Add todo</button>
        </form>
      </div>
    )
  }
}

export default AddTodo;
