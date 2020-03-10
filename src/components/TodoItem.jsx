// jshint esversion: 6
// import React, { useState } from 'react';

// function TodoItem(props) {
//   const [isDone, setIsDone] = useState(false);
//   function handleClick() {
//     setIsDone(prevValue => {
//       return !prevValue;
//     });
//   }

//   return (
//     <li
//       style={{textDecoration: isDone ? 'line-through' : 'none'}}
//       onClick={handleClick}>
//         {props.text}
//     </li>
//   )
// }

import React from 'react';

function TodoItem(props) {

  return (
    <li
    // this function is not going to be called until this li detects a click.
      onClick={() => {
        props.onChecked(props.id)
      }}>
        {props.text}
    </li>
  )
}

export default TodoItem;