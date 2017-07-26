import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CitiesView from './Cities.view.js';
import { actions } from '../../redux/actions/cities.actions';
import { push } from 'react-router-redux';

function mapStateToProps(state) {
    return {
        cities: state.cities.list, // gives our component access to state through props
    };
}

// TODO: discuss where to store router actions? Do they tend to grow and need separate file?
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        changeRoute: (url) => push(url),
        ...actions,
    }, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CitiesView);
