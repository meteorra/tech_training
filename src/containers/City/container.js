import { connect } from 'react-redux';
import viewWrapper from './view';
import { cityActions as actions, fetchForecast } from '../../redux/actions';
import { PropertyTable } from '../../components';
import { getCity } from '../../redux/reducers';

const mapStateToProps = (state, ownProps) => ({
    code: ownProps.match.params.city,
    forecast: state.city.forecast,
    cityName: getCity(state, ownProps.match.params.city).cityName,
});

export default connect(
    mapStateToProps,
    {
        fetchForecast,
        ...actions,
    }
)(viewWrapper(PropertyTable));

