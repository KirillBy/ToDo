import { ACTION_TYPES } from "../actions/item";

const initialState = {
    itemIdCounter: 100,
    items: [],
    filter: "all",
    term: "",
    selectedItem: null,
}

export const item = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.INCREMENT_ITEM_ID:
            return {
                ...state,
                itemIdCounter: action.payload
            }
        case ACTION_TYPES.CHANGE_ITEMS_LIST:
            return {
                ...state,
                items: action.payload
            }
        case ACTION_TYPES.CHANGE_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        case ACTION_TYPES.CHANGE_TERM:
            return {
                ...state,
                term: action.payload
            }        
        case ACTION_TYPES.CHANGE_SELECTED_ITEM:
            return {
                ...state,
                selectedItem: action.payload
            }        
        default:
            return state;
    }
}