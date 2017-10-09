import { cityTypes as types } from '../../constants';
import ForecastAPI from '../../api/ForecastAPI';
import { getToken } from '../../reducers';

const actions = {
    fetchForecastRequest: (city) => ({
        type: types.FETCH_FORECAST_REQUEST,
        isFetching: true,
        city
    }),
    fetchForecastSuccess: (forecast) => ({
        type: types.FETCH_FORECAST_SUCCESS,
        isFetching: false,
        forecast,
    }),
    fetchForecastFailure: (error) => ({
        type: types.FETCH_FORECAST_FAILURE,
        isFetching: false,
        error,
    }),
};

export function fetchForecast(city) {
    return (dispatch, getState) => {
        dispatch(actions.fetchForecastRequest(city));
        //const token = getToken(getState()); example of creating authenticated req
        return ForecastAPI.fetchCityForecast(city).then(forecast => {
            dispatch(actions.fetchForecastSuccess(forecast));
        }).catch(error => dispatch(actions.fetchForecastFailure(error)));
    };
}

export { actions as cityActions };

