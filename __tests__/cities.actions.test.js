import { actions, types } from '../src/redux/actions/cities.actions';

describe('cities actions', () => {

    it('should create an action to delete a city', () => {
        const id = 0;
        const expectedAction = {
            type: types.DELETE_LIST_ITEM,
            id,
        };
        expect(actions.deleteListItem(id)).toEqual(expectedAction);
    });
});
