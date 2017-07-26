import { types } from '../actions/city.actions';
import { initialState } from '../states/city.state';

export default function reducer(state = initialState, action){
    switch(action.type) {
        case types.FETCH_FORECAST_SUCCESS: return fetchForecastSuccess(state, action);
        default: return state;
    }
}

function fetchForecastSuccess(state, action) {
    return Object.assign(
        {},
        state,
        {
            forecast: {
                temp: action.forecast.main.temp,
                visibility: action.forecast.visibility,
                windSpeed: action.forecast.wind.speed,
            },
        }
    );
}
