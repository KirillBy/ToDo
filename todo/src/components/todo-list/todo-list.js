import React from 'react';
import TodoListItem from './../todo-list-item';
import './todo-list.css'

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone, onInfo}) => {
    const elments = todos.map((item) =>  {
        const {id, ...itemProps } = item;
         return ( 
         <li key={id} className="ul">
           <TodoListItem {...itemProps} 
           onDeleted={() => onDeleted(id)}
           onToggleImportant={() => onToggleImportant(id)}
           onToggleDone={() => onToggleDone(id)}
           onInfo={() => onInfo(id)}/>
         </li>
         );
     });

    return (     
      <ul className="list-group todo-list">
          {elments}
      </ul> 
    );
  };

  export default TodoList;