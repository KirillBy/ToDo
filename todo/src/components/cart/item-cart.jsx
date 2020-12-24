import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {changeItemInfoForm, changeItemEditForm} from '../../actions/components';
import {changeItemListForm} from '../../actions/components';
import {changeSelectedItem} from '../../actions/item';
import './item-cart.css';

const ItemCart = () => {
    const visible = useSelector(state => state.components.itemInfoForm);
    const selectedItem = useSelector(state => state.item.selectedItem);
    const dispatch = useDispatch();

    const onItemListForm = () => {
        dispatch(changeItemListForm(true));
        dispatch(changeItemInfoForm(false));
        dispatch(changeSelectedItem(null));
    }

    const onItemEditForm = () => {
        dispatch(changeItemEditForm(true));
        dispatch(changeItemInfoForm(false));
    }
    if (!visible) {
        return null;
      }  
    return (
        <div className="card" style={{width: '100%'}}>
                <div className="card-body">
                    <h2 className="card-title">{selectedItem.label}</h2>
                    <p className="card-text">{selectedItem.firstName} {selectedItem.lastName}</p>
                    <p className="card-text">{selectedItem.email}</p>
                    <p className="card-text">Start date: {selectedItem.startDate}</p>
                    <p className="card-text">Finish date: {selectedItem.finishDate}</p>
                    <p className="card-text">Type: {selectedItem.type}</p>
                    <div className="card-btn">
                    <button type="button"
                            className="btn btn-outline-secondary"
                            onClick = {onItemListForm}>
                                Back to tasks
                    </button>
                    <button type="button"
                            className="btn btn-outline-primary"
                            onClick = {onItemEditForm}>
                                Edit
                    </button>
                    </div>
                </div>
        </div>
    );
}

export default ItemCart;