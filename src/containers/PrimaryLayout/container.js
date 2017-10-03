import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import viewWrapper from './view';

function mapStateToProps(state) {
    return {
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
