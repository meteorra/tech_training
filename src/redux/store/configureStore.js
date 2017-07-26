import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const router = routerMiddleware(history);

const createStoreWithMiddleware = applyMiddleware(...[logger, thunk, router])(createStore);

const configureStore = (initialState) => createStoreWithMiddleware(rootReducer, initialState);

export default configureStore;

