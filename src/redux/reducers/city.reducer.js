import { types } from '../actions/city.actions';
import { initialState } from '../states/city.state';
import { assignNewState } from './utils';

export default function reducer(state = initialState, action){
    switch(action.type) {
        case types.FETCH_FORECAST_SUCCESS: return fetchForecastSuccess(state, action);
        default: return state;
    }
}

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
