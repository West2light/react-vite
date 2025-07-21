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
  const [todoList, setTodoList] = useState(
    [{ id: 1, name: 'Learning React' },
    { id: 2, name: 'Watching Youtube' }]);
  const duongdong = 'Dong Arsenal';
  //{key: value} : object

  const age = 25;
  const data = {
    address: 'Ha Noi',
    country: 'Vietnam',
  }
  const addNewTodo = (name: string) => {
    const newTodo = {
      id: randomIntFromInterval(3, 1000), // random id from 3 to 1000
      name: name
    }
    setTodoList([...todoList, newTodo]);
  }
  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo} />
      <TodoData
        myName={duongdong}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} alt="Logo React" className='logo' />
      </div>
    </div>
  );
}

export default App;
