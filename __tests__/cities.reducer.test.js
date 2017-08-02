import reducer from '../src/redux/reducers/cities.reducer';
import { types } from '../src/redux/actions/cities.actions';

describe('cities reducer', () => {

    it('should return the initial state', () => {
        expect(reducer({ list: [] }, {})).toEqual({
            list: [],
        })
    });

    it('should handle DELETE_LIST_ITEM', () => {
        expect(
            reducer({
                    list: [
                        { cityName: 'Minsk', cityCode: 'minsk', id: 0, },
                        { cityName: 'Brest', cityCode: 'brest', id: 1, },
                    ]
                },
                {
                    type: types.DELETE_LIST_ITEM,
                    id: 1
                })
        ).toEqual({
            list: [
                { cityName: 'Minsk', cityCode: 'minsk', id: 0, },
            ]
        });
    });
});
