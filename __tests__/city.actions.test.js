import { types, fetchForecast } from '../src/redux/actions/city.actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

const mockStore = configureMockStore([thunk]);

describe('city actions', () => {

    afterEach(() => {
        nock.cleanAll()
    });

    it('creates FETCH_FORECAST_SUCCESS when fetching forecast has been done', () => {

        nock('http://api.openweathermap.org')
            .get('/data/2.5/weather')
            .query({ q: 'minsk', APPID: '5f7fd37860afa128f5b86690e4c25597' })
            .reply(200, { wind: 1000 });

        const expectedActions = [
            { type: types.FETCH_FORECAST_REQUEST },
            { type: types.FETCH_FORECAST_SUCCESS, forecast: { wind: 1000 } },
        ];

        const store = mockStore({ forecast: {}, });

        return store.dispatch(fetchForecast('minsk')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    //TODO: couldn't find a way to fail nock request
});
