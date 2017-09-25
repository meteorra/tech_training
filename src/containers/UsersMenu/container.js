import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import viewWrapper from './view';
import { push } from 'react-router-redux';

function mapStateToProps(state) {
    return {
        menus: state.cities.list,
    };
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        changeRoute: (url) => push(url),
    }, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(viewWrapper());
