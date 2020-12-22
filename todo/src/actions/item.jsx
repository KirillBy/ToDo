
export const ACTION_TYPES = {
    INCREMENT_ITEM_ID: 'INCREMENT_ITEM_ID',
}
export const changeItemId = (newId) => {
    return {
        type: ACTION_TYPES.INCREMENT_ITEM_ID,
        payload: newId
    }
}
export const incrementItemId = () =>  (dispatch, getState) => {
    const newId = getState().item.itemIdCounter++;
    return dispatch(() => changeItemId(newId));
}

