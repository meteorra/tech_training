import ForecastAPI from '../api/ForecastAPI';

export const types = {
    FETCH_FORECAST: 'FETCH_FORECAST',
    FETCH_FORECAST_SUCCESS: 'FETCH_FORECAST_SUCCESS',
};

//TODO: discuss fetchForecast action creator
export const actions = {
    fetchForecast: (city) => fetchForecast(city),
    fetchForecastSuccess: (forecast) => ({ type: types.FETCH_FORECAST_SUCCESS, forecast, }),
};

function fetchForecast(city) {
    return function(dispatch) {
        return ForecastAPI.fetchCityForecast(city).then(forecast => {
            dispatch(actions.fetchForecastSuccess(forecast));
        }).catch(error => {
            throw(error);
        });
    };
}
