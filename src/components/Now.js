import React from 'react';
import './styles/Now.css';
import moment from 'moment';

const Now = (props) => {

  let remainingTasks = props.todos.filter((item) => {
    return item.done === false;
  }).length;

  return (
    <div className='Now'>
      <div className='moment'>
        <div className='day day-month'>{moment().format('D')}</div>
        <div className='month'>{moment().format('MMM')}</div>
        <div className='day day-week'>{moment().format('ddd').toUpperCase()}</div>
      </div>
      <div className='tasks'>
        {remainingTasks} Running Tasks
      </div>
    </div>
  )
}

export default Now;
