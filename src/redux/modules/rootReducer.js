import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cityList from './cityListModule';
import cityDetails from './cityDetailsModule';

const combinedReducers = combineReducers({
    cityList,
    cityDetails,
    router: routerReducer
});

export default combinedReducers;
