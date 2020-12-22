import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, onDeleted, onInfo, onToggleImportant, onToggleDone, done, important}) => {

    let classNames = 'todo-list-item';
    if(done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }
  
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={ onToggleDone}>
          {label}
        </span>
  
        <div className="btn btn-group">

          <button type="button"
                  className=" btn btn-outline-dark"
                  onClick={onInfo}>
                    Info
          </button>

          <button type="button"
                  className="btn btn-outline-primary"
                  onClick = {onToggleImportant}>
                    Important
          </button>
    
          <button type="button"
                  className=" btn btn-outline-danger"
                  onClick={onDeleted}>
                    Delete
          </button>
          
        </div>

      </span>
    );
}

export default TodoListItem;