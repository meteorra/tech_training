import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Auth from '../../oauth';


export default () => {
    class Login extends Component {

        constructor() {
            super();
            this.state = {
                username: '',
                password: '',
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.onClick = this.onClick.bind(this);
        }

        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        handleSubmit(e) {
            e.preventDefault();
            this.props.loginUser({
                username: this.state.username,
                password: this.state.password
            }).then(() => {
                this.props.history.push('/app');
            })
        }

        onClick(e) {
            // oAuth authentication
            e.preventDefault();
            const auth = new Auth();
            auth.login();
        }

        getComponent() {
            return this.props.isAuthenticated ?
                <button>Logout</button> :
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           name="username"
                           placeholder="Enter username"
                           onChange={this.handleChange}
                           value={this.state.username}
                    />
                    <input type="text"
                           name="password"
                           placeholder="Enter password"
                           onChange={this.handleChange}
                           value={this.state.password}
                    />
                    <button>Login</button>
                </form>
        }

        render() {
            return (
                <div className="login-dash">
                    {this.getComponent()}
                </div>
            );
        }
    }

    Login.propTypes = {
    };

    return Login;
};

