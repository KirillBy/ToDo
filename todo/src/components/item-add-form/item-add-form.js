import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: '',
    firstName: '',
    lastName: '',
    email: '',
    startDate: Date.now,
    finishDate: Date.now
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  onLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onStartDateChange = (e) => {
    this.setState({
      startDate: e.target.value
    })
  }

  onFinishDateChange = (e) => {
    this.setState({
      finishDate: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({
      label: '',
      firstName: ''
    });
  };
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <React.Fragment>
        <form className="item-add-form"
          onSubmit={this.onSubmit}>
          <input type="text"
            className="form-control"
            onChange={this.onFirstNameChange}
            placeholder="First name"
            value={this.state.firstName} />
          <input type="text"
            className="form-control"
            onChange={this.onLastNameChange}
            placeholder="Last name"
            value={this.state.lastName} />
          <input type="email"
            className="form-control"
            onChange={this.onEmailChange}
            placeholder="Email"
            value={this.state.email} />
          <div className = "date-group">
            <span className="form-span">from </span>
            <input type="date"
              className="form-control  form-date"
              onChange={this.onStartDateChange}
              value={this.state.startDate} />
            <span className="form-span">to </span>
            <input type="date"
              className="form-control  form-date"
              onChange={this.onFinishDateChange}
              value={this.state.finishDate} />
          </div>
          <select>
            <option>Пункт 1</option>
            <option>Пункт 2</option>
          </select>
          <input type="text"
            className="form-control"
            onChange={this.onLabelChange}
            placeholder="What needs to be done"
            value={this.state.label} />
          <button
            className=" btn item-add-btn btn-outline-success">
            Add
        </button>
        </form>
        <button class="toggle-button" onClick={this.onClose}>
          close
        </button>
      </React.Fragment>

    );
  }
}