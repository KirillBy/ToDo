import * as actions from './components'

describe('components actions', () => {
it('should create an action to change item_add_form', () => {
    const expectedAction = {
        type: actions.ACTION_TYPES.CHANGE_ADD_ITEM_FORM,
        payload: true
    }
    expect(actions.changeAddItemForm(true)).toEqual(expectedAction)
    });
it('should create an action to change item_list_form', () => {
    const expectedAction = {
        type: actions.ACTION_TYPES.CHANGE_ITEM_LIST_FORM,
        payload: true
    }
    expect(actions.changeItemListForm(true)).toEqual(expectedAction)
    });
it('should create an action to change item_edit_form', () => {
    const expectedAction = {
        type: actions.ACTION_TYPES.CHANGE_ITEM_EDIT_FORM,
        payload: false
    }
    expect(actions.changeItemEditForm(false)).toEqual(expectedAction)
    });
it('should create an action to change item_info_form', () => {
    const expectedAction = {
        type: actions.ACTION_TYPES.CHANGE_ITEM_INFO_FORM,
        payload: false
    }
    expect(actions.changeItemInfoForm(false)).toEqual(expectedAction)
    });
})