import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default () => {
    class AuthorizedLayout extends Component {

        render() {
            return (
                <div>authorized layout</div>
            );
        }
    }

    AuthorizedLayout.propTypes = {
    };

    return AuthorizedLayout;
};

