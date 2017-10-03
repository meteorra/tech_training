import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import viewWrapper from './view';

function mapStateToProps({ login }) {
    return {
        isFetching: login.isFetching,
        isAuthenticated: login.isAuthenticated,
    };
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
    }, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(viewWrapper());
