// jshint esversion: 6
import React, { useState } from "react";
import TodoItem from './TodoItem';
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(todo) {
    setItems(prevItems => {
      return [
        ...prevItems,
        todo
      ]
    });
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
      <InputArea 
        onAdd={addItem}/>
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
