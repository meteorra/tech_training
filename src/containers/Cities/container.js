import { connect } from 'react-redux';
import viewWrapper from './view';
import { citiesActions as actions } from '../../redux/actions';
import { List } from '../../components';

const mapStateToProps = ({ cities }) => ({
    cities,
});

export default connect(
    mapStateToProps,
    {...actions}
)(viewWrapper(List));
