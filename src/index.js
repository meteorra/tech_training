import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './redux/store/configureStore';
import routes from './routes';

const store = configureStore();

export default ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes()}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('weather-forecast-app')
);
