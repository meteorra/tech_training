import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CityView from './view';
import { actions, fetchForecast } from '../../redux/actions/city.actions';
import { PropertyTable } from '../../components';
import ForecastAPI from '../../redux/api/ForecastAPI';

function mapStateToProps(state, ownProps) {
    return {
        code: ownProps.match.params.city,
        forecast: state.city.forecast,
    };
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        fetchForecast: (city) => fetchForecast(ForecastAPI.fetchCityForecast(city)),
        ...actions,
    }, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityView(PropertyTable));

