import {item} from './item'
import { ACTION_TYPES } from "../actions/item";

describe('items reducer', () => {
    it('should return the initial state', () => {
      expect(item(undefined, {})).toEqual(
        {
            itemIdCounter: 100,
            items: [],
            selectedItem: null,
            filter: "all",
            term: ""
        }
      )
    })
    it('should handle INCREMENT_ITEM_ID', () => {
        expect(
          item({
            itemIdCounter: 100,
            items: [],
            selectedItem: null,
          }, {
            type: ACTION_TYPES.INCREMENT_ITEM_ID,
            payload: 101
          })
        ).toEqual(
          {
            itemIdCounter: 101,
            items: [],
            selectedItem: null,
          }
        )
    })
    it('should handle CHANGE_ITEMS_LIST', () => {
      expect(
        item({
          itemIdCounter: 100,
          items: [{id: 100, firstName: "Test"}],
          selectedItem: null,
        }, {
          type: ACTION_TYPES.CHANGE_ITEMS_LIST,
          payload: [{id: 100, firstName: "Test"}, {id: 101, firstName: "Test2"} ]
        })
      ).toEqual(
        {
          itemIdCounter: 100,
          items: [{id: 100, firstName: "Test"}, {id: 101, firstName: "Test2"} ],
          selectedItem: null,
        }
      )
  })
    it('should handle CHANGE_FILTER', () => {
      expect(
        item({
          itemIdCounter: 100,
          items: [],
          filter: "all",
        }, {
          type: ACTION_TYPES.CHANGE_FILTER,
          payload: "done"
        })
      ).toEqual(
        {
          itemIdCounter: 100,
          items: [],
          filter: "done"
        }
      )
  })
    it('should handle CHANGE_TERM', () => {
      expect(
        item({
          itemIdCounter: 100,
          items: [],
          term: "",
        }, {
          type: ACTION_TYPES.CHANGE_TERM,
          payload: "aaa"
        })
      ).toEqual(
        {
          itemIdCounter: 100,
          items: [],
          term: "aaa"
        }
      )
  })
})