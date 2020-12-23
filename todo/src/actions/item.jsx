
export const ACTION_TYPES = {
    INCREMENT_ITEM_ID: 'INCREMENT_ITEM_ID',
    CHANGE_ITEMS_LIST: 'CHANGE_ITEMS_LIST',
    CHANGE_FILTER: 'CHANGE_FILTER',
    CHANGE_TERM: 'CHANGE_TERM'
}

export const changeItemId = (newId) => {
    return {
        type: ACTION_TYPES.INCREMENT_ITEM_ID,
        payload: newId
    }
}

export const changeItemsList = (newItemList) => {
    return {
        type: ACTION_TYPES.CHANGE_ITEMS_LIST,
        payload: newItemList
    }
}

export const changeFilter = (newFilter) => {
    return {
        type: ACTION_TYPES.CHANGE_FILTER,
        payload: newFilter
    }
}

export const changeTerm = (newTerm) => {
    return {
        type: ACTION_TYPES.CHANGE_TERM,
        payload: newTerm
    }
}

export const getItemIdCounter = () => (dispatch, getState) => {
    return getState().item.itemIdCounter
}

export const getItemsList = () => (dispatch, getState) => {
    return getState().item.items
}

const createNewItem = (newItem) => (dispatch, getState) => {
    dispatch(incrementItemId());
    return {
      firstName: newItem.firstName,
      lastName: newItem.lastName,
      email: newItem.email,
      startDate: newItem.startDate,
      finishDate: newItem.finishDate,
      type: newItem.type,
      label:newItem.label,
      important: false,
      done: false,
      id: getState().item.itemIdCounter
    }
  }

export const addItemToItemList = (newItem) => (dispatch) => {
    let currentItemList = dispatch(getItemsList());
    let newItemList = [...currentItemList, dispatch(createNewItem(newItem))];
    return dispatch(changeItemsList(newItemList));
}

export const incrementItemId = () =>  (dispatch) => {
    let currentId = dispatch(getItemIdCounter())
    return dispatch(changeItemId(++currentId));
}

