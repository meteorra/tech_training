import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
    UnauthorizedLayout,
    AuthorizedRoute,
    AuthorizedLayout,
    Login,
} from '../../containers';

export default () => {
    class PrimaryLayout extends Component {
        render() {
            return (
                <Provider store={this.props.store}>
                    <BrowserRouter>
                        <div className="primary-layout">
                            <header>
                                <nav className="header-nav">Any menu</nav>
                                <Login />
                            </header>
                            <main>
                                <Switch>
                                    <AuthorizedRoute path="/app" component={AuthorizedLayout} />
                                    <Route path="/" component={UnauthorizedLayout} />
                                </Switch>
                            </main>
                        </div>
                    </BrowserRouter>
                </Provider>
            )
        }
    }


    PrimaryLayout.propTypes = {
        store: PropTypes.object.isRequired,
    };

    return PrimaryLayout;
};
