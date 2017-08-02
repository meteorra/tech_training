import ForecastAPI from '../api/ForecastAPI';

export const types = {
    FETCH_FORECAST_REQUEST: 'FETCH_FORECAST_REQUEST',
    FETCH_FORECAST_SUCCESS: 'FETCH_FORECAST_SUCCESS',
    FETCH_FORECAST_FAILURE: 'FETCH_FORECAST_FAILURE',
};

export const actions = {
    fetchForecastRequest: () => ({ type: types.FETCH_FORECAST_REQUEST, }),
    fetchForecastSuccess: (forecast) => ({ type: types.FETCH_FORECAST_SUCCESS, forecast, }),
    fetchForecastFailure: (ex) => ({ type: types.FETCH_FORECAST_FAILURE, ex, }),
};

export function fetchForecast(city) {
    return function(dispatch) {
        dispatch(actions.fetchForecastRequest());
        return ForecastAPI.fetchCityForecast(city).then(forecast => {
            dispatch(actions.fetchForecastSuccess(forecast));
        }).catch(ex => dispatch(actions.fetchForecastFailure(ex)));
    };
}
