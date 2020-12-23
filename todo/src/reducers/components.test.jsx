import {components} from './components'
import { ACTION_TYPES } from "../actions/components";

describe('components reducer', () => {
it('should return the initial state', () => {
    expect(components(undefined, {})).toEqual(
    {
        itemAddForm: false,
        itemListForm: true,
        itemEditForm: false,
        itemInfoForm: false
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
it('should handle CHANGE_ITEM_LIST_FORM', () => {
    expect(
        components({
        itemListForm: true
        }, {
        type: ACTION_TYPES.CHANGE_ITEM_LIST_FORM,
        payload: false
        })
    ).toEqual(
        {
        itemListForm: false
        }
    )
    });
    it('should handle CHANGE_ITEM_EDIT_FORM', () => {
    expect(
    components({
        itemEditForm: true
    }, {
        type: ACTION_TYPES.CHANGE_ITEM_EDIT_FORM,
        payload: false
    })
    ).toEqual(
        {
        itemEditForm: false
        }
    )
    });
    it('should handle CHANGE_ITEM_INFO_FORM', () => {
        expect(
        components({
            itemInfoForm: true
        }, {
            type: ACTION_TYPES.CHANGE_ITEM_INFO_FORM,
            payload: false
        })
        ).toEqual(
            {
            itemInfoForm: false
            }
        )
    });
});