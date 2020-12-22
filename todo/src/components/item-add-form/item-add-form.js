import React, { useState } from 'react';
import './item-add-form.css';

const ItemAddForm = ({onClose, show, onAdd }) => {
  const [label, setLabel] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [startDate, setStartDate] = useState(new Date().toJSON().slice(0,10).replace(/-/g,'/'))
  const [finishDate, setFinishDate] = useState(new Date().toJSON().slice(0,10).replace(/-/g,'/'))
  const [type, setType] = useState('work')
 
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
      firstName: firstName,
      lastName: lastName,
      email: email,
      startDate: startDate,
      finishDate: finishDate,
      type: type,
      label: label
    }
    onAdd(newCart);
    setLabel('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setStartDate(new Date().toJSON().slice(0,10).replace(/-/g,'/'));
    setFinishDate(new Date().toJSON().slice(0,10).replace(/-/g,'/'));
  }  
  const onItemAddClose = e => {
    onClose && onClose(e);
  };
  
    if (!show) {
      return null;
    }
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
          <div >
          <span className="form-span">Type </span>
            <select className="todo-select" onChange={onTypeChange}>
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
            Add
        </button>
        </form>
        <button className="toggle-button" onClick={onItemAddClose}>
          close
        </button>
      </React.Fragment>
    );

}  
export default ItemAddForm;