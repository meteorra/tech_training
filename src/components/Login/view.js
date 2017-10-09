import React from 'react';
import styles from './styles.scss';

export default () => {

    return (props) => {
        const {
            handleSubmit,
            handleChange,
            username,
            password
        } = props;

        return (
            <div className="login-dash">
                <form onSubmit={handleSubmit}>
                    <input type="text"
                           name="username"
                           placeholder="Enter username"
                           onChange={handleChange}
                           value={username}
                    />
                    <input type="text"
                           name="password"
                           placeholder="Enter password"
                           onChange={handleChange}
                           value={password}
                    />
                    <button>Login</button>
                </form>
            </div>
        );
    };

};

