// jshint esversion: 6
import React, {useState} from 'react';

function InputArea(props) {
  const [todo, setTodo] = useState('');

  function handleChange(e) {
    const newValue = e.target.value;
    setTodo(newValue);
  }
  return (
    <div className="form">
      <input 
        type="text"
        value={todo}
        onChange={handleChange} />
      <button onClick={() => {
          props.onAdd(todo);
          setTodo('');
        }}>
        <span>Add</span>
      </button>
    </div>
  )
}

export default InputArea;