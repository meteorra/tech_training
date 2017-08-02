import ForecastAPI from '../api/ForecastAPI';
import { types } from '../constants/city.types';

export const actions = {
    fetchForecastRequest: () => ({ type: types.FETCH_FORECAST_REQUEST, }),
    fetchForecastSuccess: (forecast) => ({ type: types.FETCH_FORECAST_SUCCESS, forecast, }),
    fetchForecastFailure: (error) => ({ type: types.FETCH_FORECAST_FAILURE, error, }),
};

export function fetchForecast(city) {
    return function(dispatch) {
        dispatch(actions.fetchForecastRequest());
        return ForecastAPI.fetchCityForecast(city).then(forecast => {
            dispatch(actions.fetchForecastSuccess(forecast));
        }).catch(error => dispatch(actions.fetchForecastFailure(error)));
    };
}
