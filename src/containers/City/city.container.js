import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CityView from './City.view';
import { actions } from '../../redux/actions/city.actions';

function mapStateToProps(state, ownProps) {
    return {
        code: ownProps.match.params.city,
        forecast: state.city.forecast,
    };
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityView);

