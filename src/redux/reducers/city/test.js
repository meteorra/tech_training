import reducerWrap from './reducer';
import { cityTypes as types } from '../../constants';
import { cityState as initialState } from '../../states';

describe('city reducer', () => {

    const reducer = reducerWrap(initialState);

    it('returns the initial state when nothing is passed', () => {
        expect(reducer()).toEqual(initialState);
    });

    it('updates forecast object with corresponding data on FETCH_FORECAST_SUCCESS action', () => {
        expect(
            reducer(initialState,
                {
                    type: types.FETCH_FORECAST_SUCCESS,
                    forecast: {
                        main: { temp: 20, },
                        visibility: 100,
                        wind: { speed: 1000, }, },
                })
        ).toEqual({
            forecast: {
                temp: 20,
                visibility: 100,
                windSpeed: 1000,
            },
        });
    });

    it('updates forecast object with error property on FETCH_FORECAST_FAILURE action', () => {
        expect(
            reducer(initialState,
                {
                    type: types.FETCH_FORECAST_FAILURE,
                    error: 'some error',
                })
        ).toEqual({
            forecast: {
                error: 'some error',
            },
        });
    });
});
