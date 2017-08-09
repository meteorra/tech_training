import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CitiesView from './view.js';
import { actions } from '../../redux/actions/cities.actions';
import { push } from 'react-router-redux';
import { List } from '../../components';

function mapStateToProps(state) {
    return {
        cities: state.cities.list, // gives our component access to state through props
    };
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        changeRoute: (url) => push(url),
        ...actions,
    }, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CitiesView(List));
