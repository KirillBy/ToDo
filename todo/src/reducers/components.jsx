import { ACTION_TYPES } from "../actions/components";

const initialState = {
    itemAddForm: false,
    itemListForm: true,
    itemEditForm: false,
    itemInfoForm: false
}

export const components = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_ADD_ITEM_FORM:
            return {
                ...state,
                itemAddForm: action.payload
            }
        case ACTION_TYPES.CHANGE_ITEM_LIST_FORM:
            return {
                ...state,
                itemListForm: action.payload
            }
        case ACTION_TYPES.CHANGE_ITEM_EDIT_FORM:
            return {
                ...state,
                itemEditForm: action.payload
            }               
        case ACTION_TYPES.CHANGE_ITEM_INFO_FORM:
            return {
                ...state,
                itemInfoForm: action.payload
            }               
        default:
            return state;
    }
}