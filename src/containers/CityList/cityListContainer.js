import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CityListView from './CityListView.js'
import {actions} from '../../redux/modules/cityList';

function mapStateToProps(state) {
  return {
    cityList: state.cityList // gives our component access to state through props
  }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions), dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityListView);
