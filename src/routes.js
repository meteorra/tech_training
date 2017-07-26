import React from 'react';
import { Route } from 'react-router';
import { CitiesContainer, CityContainer } from './containers';

export default function router() {
    return (
        <div>
            <Route exact path="/" component={CitiesContainer}  />
            <Route path="/:city" component={CityContainer} />
        </div>
    );
}

