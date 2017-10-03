import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default () => {
    class UsersMenu extends Component {

        render() {
            return (
                <div className="menu users-menu">
                    Users menu goes here
                </div>
            );
        }
    }

    UsersMenu.propTypes = {
        changeRoute: PropTypes.func,
        menus: PropTypes.array,
    };

    return UsersMenu;
};

