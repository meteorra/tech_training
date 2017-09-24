import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';



const rootEl = document.getElementById('weather-forecast-app');

const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        rootEl
    );

render(App);

if (module.hot) {
    module.hot.accept();
}

