import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cities from './cities.reducer';
import city from './city.reducer';

const combinedReducers = combineReducers({
    cities,
    city,
    router: routerReducer,
});

export default combinedReducers;

