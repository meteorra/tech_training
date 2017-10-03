import React, { Component } from 'react';
import configureStore from './redux/store/configureStore';
import { PrimaryLayout } from './containers';


export const store = configureStore();

export default class App extends Component {
    render() {
        return (<PrimaryLayout store={store} />);
    }
}
