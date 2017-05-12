import React from 'react';
import TodoItem from './TodoItem';
import './styles/TodoList.css';

const TodoList = (props) => {
  //let's move data up towards the app's state
  const deleteTodo = (id) => {
    props.deleteTodo(id);
  }

  const editTodo = (id) => {
    props.editTodo(id);
  }

  const updateTodo = (id, newTask) => {
    props.updateTodo(id, newTask);
  }
  const doneTodo = (id) => {
    props.doneTodo(id);
  }

  return (
    <div className='TodoList'>
      <ul>
        {
          props.todos.map(todo => {
            return (
              <TodoItem
                todo={todo}
                key={todo.id}
                deleteTodo={(id) => deleteTodo(id)}
                editTodo={(id) => editTodo(id)}
                updateTodo={(id, newTask) => updateTodo(id, newTask)}
                doneTodo={(id) => doneTodo(id)}
              />
            )
          })
        }
      </ul>
    </div>
  )
}

export default TodoList;
