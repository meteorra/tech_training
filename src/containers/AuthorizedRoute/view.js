import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default () => {
    class AuthorizedRoute extends Component {
        componentWillMount() {
            //this.props.loginUser(); getLoggedUser
        }

        render() {
            const { component: Component, isFetching, isAuthenticated, ...rest } = this.props;
            //const { component: Component, isFetching, isAuthenticated, ...rest } = this.props;

            return (
                <Route {...rest} render={props => {
                    //if (isFetching) return <div>Loading...</div>
                    return isAuthenticated
                        ? <Component {...this.props} />
                        : <Redirect to="/" />
                }} />
            );
        }
    }


    AuthorizedRoute.propTypes = {
    };

    return AuthorizedRoute;
};

