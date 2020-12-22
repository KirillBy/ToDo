import * as actions from './item'

describe('item actions', () => {
  it('should create an action to change action', () => {
    const expectedAction = {
      type: actions.ACTION_TYPES.INCREMENT_ITEM_ID,
      payload: 101
    }
    expect(actions.changeItemId(101)).toEqual(expectedAction)
  })
})