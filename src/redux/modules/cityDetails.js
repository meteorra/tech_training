import ForecastAPI from '../api/ForecastAPI';

export const types = {
    FETCH_FORECAST_SUCCESS: 'FETCH_FORECAST_SUCCESS'
};

export const actions = {
    fetchForecastSuccess: (forecast)=>({type: types.FETCH_FORECAST_SUCCESS, forecast})
};

export function fetchCityForecast(city) {
    return function(dispatch) {
        return ForecastAPI.fetchCityForecast(city).then(forecast => {
            dispatch(actions.fetchForecastSuccess(forecast));
        }).catch(error => {
            throw(error);
        });
    };
}

const initialState = {
    forecast: {}
};

export default function reducer(state = initialState, action){
    switch(action.type) {
        case types.FETCH_FORECAST_SUCCESS:
            return Object.assign(
            {},
            state,
            {
                forecast: {
                    temp: action.forecast.main.temp,
                    visibility: action.forecast.visibility,
                    windSpeed: action.forecast.wind.speed
                }
            }
        );
        default:
            return state;
    }
}
