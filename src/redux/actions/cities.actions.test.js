import { actions } from './cities.actions';
import { citiesTypes as types } from '../constants';

describe('cities actions', () => {

    it('should create DELETE_LIST_ITEM action to delete a city', () => {
        const id = 0;
        const expectedAction = {
            type: types.DELETE_LIST_ITEM,
            id,
        };
        expect(actions.deleteListItem(id)).toEqual(expectedAction);
    });
});
