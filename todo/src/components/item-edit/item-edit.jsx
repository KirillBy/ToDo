import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {changeItemEditForm, changeItemInfoForm} from '../../actions/components';
import {editItemInList,changeSelectedItem} from '../../actions/item'
import './item-edit.css';

const ItemEdit = ({ onEdit}) => {
  const currentItem = useSelector(state => state.item.selectedItem);
  const dispatch = useDispatch();  

  const [label, setLabel] = useState(currentItem.label)
  const [firstName, setFirstName] = useState(currentItem.firstName)
  const [lastName, setLastName] = useState(currentItem.lastName)
  const [email, setEmail] = useState(currentItem.email)
  const [startDate, setStartDate] = useState(currentItem.startDate)
  const [finishDate, setFinishDate] = useState(currentItem.finishDate)
  const [type, setType] = useState(currentItem.type)

  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const onFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const onLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const onStartDateChange = (e) => {
    setStartDate(e.target.value);
  }

  const onFinishDateChange = (e) => {
    setFinishDate(e.target.value);
  }

  const onTypeChange = (e) => {
    setType(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let newCart = {
      id: currentItem.id,  
      firstName: firstName,
      lastName: lastName,
      email: email,
      startDate: startDate,
      finishDate: finishDate,
      type: type,
      label: label
    }
    dispatch(editItemInList(newCart));
    dispatch(changeSelectedItem(newCart));
    dispatch(changeItemEditForm(false));
    dispatch(changeItemInfoForm(true));
  };
  const onEditClose = () => {
    dispatch(changeItemEditForm(false));
    dispatch(changeItemInfoForm(true));
  };
    return (
      <React.Fragment>
        <form className="item-add-form"
          onSubmit={onSubmit}>
          <input type="text"
            className="form-control"
            onChange={onFirstNameChange}
            placeholder="First name"
            value={firstName} />
          <input type="text"
            className="form-control"
            onChange={onLastNameChange}
            placeholder="Last name"
            value={lastName} />
          <input type="email"
            className="form-control"
            onChange={onEmailChange}
            placeholder="Email"
            value={email} />
          <div className = "date-group">
            <span className="form-span">from </span>
            <input type="date"
              className="form-control  form-date"
              onChange={onStartDateChange}
              value={startDate} />
            <span className="form-span">to </span>
            <input type="date"
              className="form-control  form-date"
              onChange={onFinishDateChange}
              value={finishDate} />
          </div>
          <div select-group>
          <span className="form-span">Type </span>
            <select className="todo-select" onChange={onTypeChange} defaultValue={type}>
              <option value='work'>Work</option>
              <option value='study'>Study</option>
              <option value='hobby'>Hobby</option>
              <option value='sport'>Sport</option>
            </select>
          </div>
          <input type="text"
            className="form-control"
            onChange={onLabelChange}
            placeholder="What needs to be done"
            value={label} />
          <button
            className=" btn item-add-btn btn-outline-success">
            Edit
        </button>
        </form>
        <button className="toggle-button" onClick={onEditClose}>
          close
        </button>
      </React.Fragment>

    );
}
export default ItemEdit;