// jshint esversion: 6
import React, { useState } from "react";
import TodoItem from './TodoItem';

function App() {
  const [todo, setTodo] = useState('');
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const newValue = e.target.value;
    setTodo(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [
        ...prevItems,
        todo
      ]
    });
    setTodo('');
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          type="text"
          value={todo}
          onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => {
            return (
              <TodoItem 
                text={todoItem}
                key={index}
                id={index}
                onChecked={deleteItem}/>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
