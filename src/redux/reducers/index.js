import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cities from './cities/reducer';
import city from './city/reducer';
import { citiesState, cityState } from '../states';

const combinedReducers = combineReducers({
    cities: cities(citiesState),
    city: city(cityState),
    router: routerReducer,
});

export default combinedReducers;

