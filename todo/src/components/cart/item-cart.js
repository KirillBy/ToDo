import React, { Component } from 'react';
import './item-cart.css';

const ItemCart = ({ item, onBack, onTaskEdit }) => {
    return (
        <div className="card" style={{width: '100%'}}>
                <div className="card-body">
                    <h2 className="card-title">{item.label}</h2>
                    <p className="card-text">{item.firstName} {item.lastName}</p>
                    <p className="card-text">{item.email}</p>
                    <p className="card-text">Start date: {item.startDate}</p>
                    <p className="card-text">Finish date: {item.finishDate}</p>
                    <p className="card-text">Type: {item.type}</p>
                    <div className="card-btn">
                    <button type="button"
                            className="btn btn-outline-secondary"
                            onClick = {onBack}>
                                Back to tasks
                    </button>
                    <button type="button"
                            className="btn btn-outline-primary"
                            onClick = {onTaskEdit}>
                                Edit
                    </button>
                    </div>
                </div>
        </div>
    );
}

export default ItemCart;