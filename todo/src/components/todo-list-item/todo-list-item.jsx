import React from 'react';
import './todo-list-item.css';
import {deleteItemFromItemList, changeItemImortantProp, changeItemDoneProp, changeSelectedItem} from '../../actions/item';
import {changeItemInfoForm, changeItemListForm} from '../../actions/components';
import {useDispatch } from 'react-redux';

const TodoListItem = ({item}) => {
    
    const dispatch = useDispatch();

    const deleteItem = () => {
      dispatch(deleteItemFromItemList(item.id));
    }

    const changeImportantProp = () => {
      dispatch(changeItemImortantProp(item.id));
    }

    const changeDoneProp = () => {
      dispatch(changeItemDoneProp(item.id));
    }

    const onItemInfoOpen = () => {
      dispatch(changeItemInfoForm(true));
      dispatch(changeItemListForm(false));
      dispatch(changeSelectedItem(item));
    }

    let classNames = 'todo-list-item';
    if(item.done) {
      classNames += ' done';
    }

    if (item.important) {
      classNames += ' important';
    }
  
    return (

      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={changeDoneProp}>
          {item.label}
        </span>
  
        <div className="btn btn-group">
          <button type="button"
                  className=" btn btn-outline-dark"
                  onClick={onItemInfoOpen}>
                    Info
          </button>

          <button type="button"
                  className="btn btn-outline-primary"
                  onClick = {changeImportantProp}>
                    Important
          </button>
    
          <button type="button"
                  className=" btn btn-outline-danger"
                  onClick={deleteItem}>
                    Delete
          </button>
          
        </div>

      </span>
    );
}

export default TodoListItem;