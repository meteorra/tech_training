import { cityTypes as types } from '../../constants';

const actions = {
    fetchForecastRequest: () => ({ type: types.FETCH_FORECAST_REQUEST, }),
    fetchForecastSuccess: (forecast) => ({ type: types.FETCH_FORECAST_SUCCESS, forecast, }),
    fetchForecastFailure: (error) => ({ type: types.FETCH_FORECAST_FAILURE, error, }),
};

export function fetchForecast(apiCall) {
    return (dispatch) => {
        dispatch(actions.fetchForecastRequest());
        return apiCall.then(forecast => {
            dispatch(actions.fetchForecastSuccess(forecast));
        }).catch(error => dispatch(actions.fetchForecastFailure(error)));
    };
}

export { actions as cityActions };

