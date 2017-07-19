import React from 'react';
import { Route } from 'react-router';
import CityListContainer from './containers/CityList/cityListContainer';
import CityDetailsContainer from './containers/CityDetails/CityDetailsContainer';

export default function router() {
    return (
        <div>
            <Route exact path="/" component={CityListContainer} />
            <Route path="/:number" component={CityDetailsContainer}/>
        </div>
    )
}

