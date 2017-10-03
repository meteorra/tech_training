import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    CitiesContainer,
    CityContainer,
} from '../../containers';

export default () => {
    class UnauthorizedLayout extends Component {

        render() {
            return (
                <Switch>
                    <Route exact path="/" component={CitiesContainer}  />
                    <Route path="/:city" component={CityContainer} />
                    <Redirect to="/" />
                </Switch>
            );
        }
    }

    UnauthorizedLayout.propTypes = {
    };

    return UnauthorizedLayout;
};

