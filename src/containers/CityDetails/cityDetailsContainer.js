import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CityDetailsView from './CityDetailsView';
import {actions} from '../../redux/modules/cityDetails';

function mapStateToProps(state) {
    return {
        cityDetails: state.cityDetails // gives our component access to state through props
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityDetailsView);

