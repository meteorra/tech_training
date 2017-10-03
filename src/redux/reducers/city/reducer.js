import { combineReducers } from 'redux';
import { forecastState, detailsState } from '../../states';
import { cityTypes as types } from '../../constants';
import { assignNewState } from '../utils';

const cityCode = (initialState) => {
    return (state = initialState, action = {}) => {
        switch(action.type) {
            case types.FETCH_FORECAST_REQUEST: return fetchForecastRequest(state, action);
            default: return state;
        }
    };
};

const forecast = (initialState) => {
    return (state = initialState, action = {}) => {
        switch(action.type) {
            case types.FETCH_FORECAST_SUCCESS: return fetchForecastSuccess(state, action);
            case types.FETCH_FORECAST_FAILURE: return fetchForecastFailure(state, action);
            default: return state;
        }
    };
};

const city = combineReducers({
    cityCode: cityCode(detailsState),
    forecast: forecast(forecastState),
});

export default city;

function fetchForecastRequest(state, action) {
    return action.city;
}

function fetchForecastSuccess(state, action) {

    const { forecast: { main: { temp, }, visibility, wind: { speed, }, }, } = action;

    return assignNewState(
        state,
        {
            temp: temp,
            visibility: visibility,
            windSpeed: speed,
        },
    );
}

// Very simplified error handler for test purposes
function fetchForecastFailure(state, { error, }) {
    return assignNewState(
        state,
        {
            error,
        },
    );
}
