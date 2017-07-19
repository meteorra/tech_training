import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cityList from '../modules/cityList';
import cityDetails from '../modules/cityDetails';

const combinedReducers = combineReducers({
    cityList,
    cityDetails,
    router: routerReducer
});

export default combinedReducers;
