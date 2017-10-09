import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose, branch, renderComponent } from 'recompose';

import { Logout } from '../../components';
import Login from '../Login';
import { getUserStatus } from '../../redux/reducers';

const mapStateToProps = (state) => ({
    isAuthenticated: getUserStatus(state),
});

const AuthDoor = (Login, Logout) => compose(
    withRouter,
    connect(
        mapStateToProps
    ),
    branch(
        //({ isAuthenticated, inProgress }) => isAuthenticated || inProgress,
        ({ isAuthenticated, }) => !isAuthenticated,
        renderComponent(Login),
        renderComponent(Logout)
    )
);

export default AuthDoor(Login, Logout)();

