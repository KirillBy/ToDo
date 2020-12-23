import {components} from './components'
import { ACTION_TYPES } from "../actions/components";

describe('components reducer', () => {
    it('should return the initial state', () => {
      expect(components(undefined, {})).toEqual(
        {
            itemAddForm: false,
        }
      )
    });
    it('should handle CHANGE_ADD_ITEM_FORM', () => {
        expect(
          components({
            itemAddForm: false
          }, {
            type: ACTION_TYPES.CHANGE_ADD_ITEM_FORM,
            payload: true
          })
        ).toEqual(
          {
            itemAddForm: true
          }
        )
    });
});