import { connect } from 'react-redux';
import { compose, withStateHandlers, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';

import { loginWrapper } from '../../components';
import { loginActions as actions, loginUser } from '../../redux/actions';

const mapStateToProps = () => ({
});

const enhance = compose(
    connect(
        mapStateToProps,
        {
            loginUser,
            ...actions,
        }
    ),
    withStateHandlers(
        ({ username = '', password = '', }) => ({
            username,
            password,
        }),
        {
            handleChange: () => (e) => {
                return {
                    [e.target.name]: e.target.value,
                };
            },
            handleSubmit: ({ username, password, }, props) => (e) => {
                e.preventDefault();
                props.loginUser({
                    username,
                    password,
                }).then(() => {
                    props.history.push('/app');
                });
            },

        }
    ),
    setPropTypes({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        handleChange: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
    })
);

export default enhance(loginWrapper());
