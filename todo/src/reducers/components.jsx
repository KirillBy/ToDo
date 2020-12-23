import { ACTION_TYPES } from "../actions/components";

const initialState = {
    itemAddForm: false
}

export const components = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_ADD_ITEM_FORM:
            return {
                ...state,
                itemAddForm: action.payload
            }    
        default:
            return state;
    }
}