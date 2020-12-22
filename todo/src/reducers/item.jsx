import { ACTION_TYPES } from "../actions/item";

const initialState = {
    itemIdCounter: 100,
    list: [],
    selectedItem: null,
}

export const item = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.INCREMENT_ITEM_ID:
            return {
                ...state,
                itemIdCounter: action.payload
            }
        default:
            return state;
    }
}