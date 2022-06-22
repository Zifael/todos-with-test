import React, { useState } from 'react';
import './App.css';
import TodosSelect from './Component/TodosSelect';

export interface ITodo {
  id: number,
  title: string,
  isCompleted: boolean
}

function App() {

  const [todos, setArr] = useState<ITodo[]>([
  	
  ])
  
  const [selectedMenu, setSelectedMenu] = useState<'all' | 'active' | 'completed'>('all')	
  const [value, setValue] = useState<string>('')
  
  const deleteAllCompletedTodos = () => {
	setArr(prev => prev.filter(t => t.isCompleted !== true))
  }

  const addNewTodo = () => {
	const newTodo: ITodo= {
		id: Date.now(),
		title: value,
		isCompleted: false
	}
	setArr(prev => [ newTodo, ...prev])
	setValue('')
  }

  return (
    <div className="App">
      <div className='todos'>  
        <h1 className='todos__title'>todos</h1>
        <div className='todos__input__block'>
          <div className='todos__arrowDown'>&#9660;</div>
          <input         
		  	  data-testid='add-value'      
              value={value}
              className='todos__input'            
              placeholder='What needs to be done?'
              onChange={e => setValue(e.target.value)}
          />
		      <button 
			  	data-testid='btn-add'  
			  	disabled={!value ? true : false} 
			  	onClick={addNewTodo} 
			  	className='addTodo'>Add			  
			  </button>
        </div>
        <TodosSelect            			
			todos={
				selectedMenu === 'active' ? todos.filter(t => t.isCompleted === false) : 
				selectedMenu === 'completed' ? todos.filter(t => t.isCompleted === true) :
				todos
			} 
			setArr={setArr} 
		/>
        <div className='todos__menu'>
          <div className='todos__menu__title'>{todos.filter(t => t.isCompleted === false).length} items left</div>
          <div className='todos__menu__block__button'>
              <button 
			  	onClick={() => setSelectedMenu('all')}  
			  	className={`todos__menu__button ${selectedMenu === 'all' && 'active'}`}>
			  	All 
			  </button>
              <button 
			  	onClick={() => setSelectedMenu('active')} 
			  	className={`todos__menu__button ${selectedMenu === 'active' && 'active'}`}>
				Active
			  </button>
              <button 
			  	onClick={() => setSelectedMenu('completed')} 
				className={`todos__menu__button ${selectedMenu === 'completed' && 'active'}`}>
				Completed
			  </button>
          </div>
          <div data-testid='toggle-btn' onClick={deleteAllCompletedTodos} className='todos__menu__clearCompleted'>Clear completed</div>
        </div>
      </div>
    </div>
  );
}

export default App;
