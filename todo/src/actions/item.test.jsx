import * as actions from './item'

describe('item actions', () => {
  it('should create an action to change ID', () => {
    const expectedAction = {
      type: actions.ACTION_TYPES.INCREMENT_ITEM_ID,
      payload: 101
    }
    expect(actions.changeItemId(101)).toEqual(expectedAction)
  });
  it('should create an action to change item list', () => {
    const expectedAction = {
      type: actions.ACTION_TYPES.CHANGE_ITEMS_LIST,
      payload: {id: 99, firstName: "test"}
    }
    expect(actions.changeItemsList({id: 99, firstName: "test"})).toEqual(expectedAction)
  })
  it('should create an action to change filter', () => {
    const expectedAction = {
      type: actions.ACTION_TYPES.CHANGE_FILTER,
      payload: "done"
    }
    expect(actions.changeFilter("done")).toEqual(expectedAction)
  })
    it('should create an action to change term', () => {
      const expectedAction = {
        type: actions.ACTION_TYPES.CHANGE_TERM,
        payload: "aaa"
      }
      expect(actions.changeTerm("aaa")).toEqual(expectedAction)
    })
    it('should create an action to change selected item', () => {
      const expectedAction = {
        type: actions.ACTION_TYPES.CHANGE_SELECTED_ITEM,
        payload: {id: 99, firstName: "test"}
      }
      expect(actions.changeSelectedItem({id: 99, firstName: "test"})).toEqual(expectedAction)
    })
})