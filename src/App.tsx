import { useState } from 'react'

import viteLogo from '/vite.svg'
import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
import { count } from 'console'
// () => {} : arrow function
//component = html + css + javascript

const App = () => {
  const duongdong = 'Dong Arsenal';
  //{key: value} : object

  const age = 25;
  const data = {
    address: 'Ha Noi',
    country: 'Vietnam',
  }
  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo List</div>
      <TodoNew />
      <TodoData
        myName={duongdong}
        age={age}
        data={data}
      />
      <div className='todo-image'>
        <img src={reactLogo} alt="Logo React" className='logo' />
      </div>
    </div>
  );
}

export default App;
