

export const ACTION_TYPES = {
    INCREMENT_ITEM_ID: 'INCREMENT_ITEM_ID',
    CHANGE_ITEMS_LIST: 'CHANGE_ITEMS_LIST',
    CHANGE_FILTER: 'CHANGE_FILTER',
    CHANGE_TERM: 'CHANGE_TERM',
    CHANGE_SELECTED_ITEM: 'CHANGE_SELECTED_ITEM'
}

export const changeItemId = (newId) => {
    return {
        type: ACTION_TYPES.INCREMENT_ITEM_ID,
        payload: newId
    }
}

export const changeSelectedItem = (newItem) => {
    return {
        type: ACTION_TYPES.CHANGE_SELECTED_ITEM,
        payload: newItem
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

export const addItemToItemList = (newItem) => (dispatch) => {
    let currentItemList = dispatch(getItemsList());
    let newItemList = [...currentItemList, dispatch(createNewItem(newItem))];
    return dispatch(changeItemsList(newItemList));
}

export const deleteItemFromItemList = (id) => (dispatch) => {
    let currentItemList = dispatch(getItemsList());
    const idx = currentItemList.findIndex((el) => el.id === id);
    const before = currentItemList.slice(0, idx);
    const after = currentItemList.slice(idx +1);
    const newItemList = [...before, ...after]
    return dispatch(changeItemsList(newItemList));
}

export const editItemInList = (newItem) => (dispatch) => {
    let currentItemList = dispatch(getItemsList());
    const idx = currentItemList.findIndex((el) => el.id === newItem.id);
    let newItemList = [...currentItemList.slice(0, idx), newItem, ...currentItemList.slice(idx +1)];
    return dispatch(changeItemsList(newItemList));
}

export const incrementItemId = () =>  (dispatch) => {
    let currentId = dispatch(getItemIdCounter())
    return dispatch(changeItemId(++currentId));
}

export const changeItemImortantProp = (id) => (dispatch) => {
    const newItemList =  dispatch(toggleProperty( id, 'important'));
    dispatch(changeItemsList(newItemList));
}

export const changeItemDoneProp = (id) => (dispatch) => {
    const newItemList =  dispatch(toggleProperty( id, 'done'));
    dispatch(changeItemsList(newItemList));
}

const toggleProperty = (id, propName) => (dispatch) =>{
    let currentItemList = dispatch(getItemsList());
    const idx = currentItemList.findIndex((el) => el.id === id);
    const oldItem = currentItemList[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    return [...currentItemList.slice(0, idx), newItem, ...currentItemList.slice(idx +1)];    
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