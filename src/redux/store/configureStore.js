import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { loadState, saveState } from '../../localStorage';
import throttle from 'lodash/throttle';
import authMiddleware from '../middleware/api';

const configureStore = () => {

    const persistedState = loadState();
    let middlewares = [thunk, authMiddleware];

    if(process.env.NODE_ENV !== 'production') {
        // order of applying middlewares matters
        // first goes thunk, then logger
        middlewares.push(logger);
    }

    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(...middlewares)
    );

    store.subscribe(throttle(() => {
        saveState('state', {
            cities: store.getState().cities,
        });
    }, 1000));

    return store;
};

export default configureStore;

