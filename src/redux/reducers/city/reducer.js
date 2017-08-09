import { cityTypes as types } from '../../constants';
import { assignNewState } from '../utils';

export default (initialState) => {
    return (state = initialState, action = {}) => {
        switch(action.type) {
            case types.FETCH_FORECAST_SUCCESS: return fetchForecastSuccess(state, action);
            case types.FETCH_FORECAST_FAILURE: return fetchForecastFailure(state, action);
            default: return state;
        }
    };
};

function fetchForecastSuccess(state, action) {

    const { forecast: { main: { temp, }, visibility, wind: { speed, }, }, } = action;

    return assignNewState(
        state,
        {
            forecast: {
                temp: temp,
                visibility: visibility,
                windSpeed: speed,
            },
        }
    );
}

// Very simplified error handler for test purposes
function fetchForecastFailure(state, { error, }) {
    return assignNewState(
        state,
        {
            forecast: {
                error,
            },
        }
    );
}
