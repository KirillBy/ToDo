import * as actions from './components'

describe('components actions', () => {
  it('should create an action to change item_add_form', () => {
    const expectedAction = {
      type: actions.ACTION_TYPES.CHANGE_ADD_ITEM_FORM,
      payload: true
    }
    expect(actions.changeAddItemForm(true)).toEqual(expectedAction)
  });
})