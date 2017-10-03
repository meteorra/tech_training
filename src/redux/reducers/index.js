import { combineReducers } from 'redux';
import cities, { getCityFromCities } from './cities/reducer';
import city from './city/reducer';
import login, { getLoginToken, getUserStatusFromLogin } from './login/reducer';
import { citiesState, loginState } from '../states';

const combinedReducers = combineReducers({
    cities: cities(citiesState),
    login: login(loginState),
    city,
});

export const getToken = (state) => getLoginToken(state);
export const getCity = (state, code) => getCityFromCities(state, code);
export const getUserStatus = (state, code) => getUserStatusFromLogin(state, code);

export default combinedReducers;

