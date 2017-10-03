import reducerWrap from './reducer';
import { citiesTypes as types } from '../../constants';
import { citiesState as initialState } from '../../states';

describe('cities reducer', () => {

    const reducer = reducerWrap(initialState);

    it('returns the initial state when nothing is passed', () => {
        expect(reducer()).toEqual(initialState);
    });

    it('deletes list item with the corresponding id on DELETE_LIST_ITEM action', () => {

        const list = [
            { cityName: 'Minsk', cityCode: 'minsk', id: 0, },
            { cityName: 'Brest', cityCode: 'brest', id: 1, }
        ];


        expect(
            reducer({
                list,
            },
            {
                type: types.DELETE_LIST_ITEM,
                id: 1,
            })
        ).toEqual({
            list: [list[0]],
        });
    });
});
