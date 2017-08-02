import reducer from '../src/redux/reducers/city.reducer';
import { types } from '../src/redux/actions/city.actions';

describe('city reducer', () => {

    it('should return the initial state', () => {
        expect(reducer({ forecast: {} }, {})).toEqual({
            forecast: {},
        })
    });

    it('should handle FETCH_FORECAST_SUCCESS', () => {
        expect(
            reducer({
                    forecast: {},
                },
                {
                    type: types.FETCH_FORECAST_SUCCESS,
                    forecast: {
                        main: { temp: 20, },
                        visibility: 100,
                        wind: { speed: 1000, }, }
                })
        ).toEqual({
            forecast: {
                temp: 20,
                visibility: 100,
                windSpeed: 1000,
            },
        });
    });
});
