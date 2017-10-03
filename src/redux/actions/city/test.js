import { fetchForecast } from './actions';
import { cityTypes as types } from '../../constants';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('city actions', () => {

    it('creates FETCH_FORECAST_REQUEST & FETCH_FORECAST_SUCCESS actions when fetching forecast is successful', () => {

        const apiCall = Promise.resolve({ wind: 1000, });

        const expectedActions = [
            { type: types.FETCH_FORECAST_REQUEST, },
            { type: types.FETCH_FORECAST_SUCCESS, forecast: { wind: 1000, }, }
        ];

        const store = mockStore({});

        return store.dispatch(fetchForecast(apiCall)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates FETCH_FORECAST_REQUEST & FETCH_FORECAST_FAILURE actions when fetching forecast has failed', () => {

        const apiCall = Promise.reject('any error');

        const expectedActions = [
            { type: types.FETCH_FORECAST_REQUEST, },
            { type: types.FETCH_FORECAST_FAILURE, error: 'any error', }
        ];

        const store = mockStore({});

        return store.dispatch(fetchForecast(apiCall)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});
