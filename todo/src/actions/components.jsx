export const ACTION_TYPES = {
    CHANGE_ADD_ITEM_FORM: "CHANGE_ADD_ITEM_FORM"
}

export const changeAddItemForm = (visible) => {
    return {
        type: ACTION_TYPES.CHANGE_ADD_ITEM_FORM,
        payload: visible
    }
}