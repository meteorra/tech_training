import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import viewWrapper from './view';

function mapStateToProps(state) {
    return {
        menus: state.cities.list,
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
