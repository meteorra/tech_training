import { connect } from 'react-redux';
import viewWrapper from './view';
import { loginActions as actions, loginUser } from '../../redux/actions';
import { withRouter } from 'react-router';
import { getUserStatus } from '../../redux/reducers';

const mapStateToProps = (state) => ({
    isAuthenticated: getUserStatus(state)
});

const component = withRouter(connect(
    mapStateToProps,
    {
        loginUser,
        ...actions,
    }
)(viewWrapper()));

export default component;
