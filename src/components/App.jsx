// jshint esversion: 6
import React, { useState } from "react";

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
              <li key={index}>
                {todoItem}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
