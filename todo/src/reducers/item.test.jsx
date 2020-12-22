import {item} from './item'
import { ACTION_TYPES } from "../actions/item";

describe('items reducer', () => {
    it('should return the initial state', () => {
      expect(item(undefined, {})).toEqual(
        {
            itemIdCounter: 100,
            list: [],
            selectedItem: null,
        }
      )
    })
    it('should handle INCREMENT_ITEM_ID', () => {
        expect(
          item({
            itemIdCounter: 100,
            list: [],
            selectedItem: null,
          }, {
            type: ACTION_TYPES.INCREMENT_ITEM_ID,
            payload: 101
          })
        ).toEqual(
          {
            itemIdCounter: 101,
            list: [],
            selectedItem: null,
          }
        )
    })
})