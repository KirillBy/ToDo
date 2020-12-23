export const ACTION_TYPES = {
    CHANGE_ADD_ITEM_FORM: "CHANGE_ADD_ITEM_FORM",
    CHANGE_ITEM_LIST_FORM: "CHANGE_ITEM_LIST_FORM",
    CHANGE_ITEM_EDIT_FORM: "CHANGE_ITEM_EDIT_FORM",
    CHANGE_ITEM_INFO_FORM: "CHANGE_ITEM_INFO_FORM"
}

export const changeAddItemForm = (visible) => {
    return {
        type: ACTION_TYPES.CHANGE_ADD_ITEM_FORM,
        payload: visible
    }
}

export const changeItemListForm = (visible) => {
    return {
        type: ACTION_TYPES.CHANGE_ITEM_LIST_FORM,
        payload: visible
    }
}

export const changeItemEditForm = (visible) => {
    return {
        type: ACTION_TYPES.CHANGE_ITEM_EDIT_FORM,
        payload: visible
    }
}

export const changeItemInfoForm = (visible) => {
    return {
        type: ACTION_TYPES.CHANGE_ITEM_INFO_FORM,
        payload: visible
    }
}