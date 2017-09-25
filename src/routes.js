import React from 'react';
import { Route } from 'react-router';
import {
    CitiesContainer,
    CityContainer,
    UsersMenu
} from './containers';

export default function router() {
    return (
        <div className="primary-layout">
            <header>
                Header with menu
                <Route path="/:city" component={UsersMenu} />
            </header>
            <main>
                <Route exact path="/" component={CitiesContainer}  />
                <Route path="/:city" component={CityContainer} />
            </main>
        </div>
    );
}

