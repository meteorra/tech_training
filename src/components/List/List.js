import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const List = ({ listItems, deleteListItem, }) => {

    const component = listItems.length ?
        <ul className="list city-list">
            {
                listItems.map((el) => (
                    <li
                        key={el.id} className="list-item city-list-item">
                        <div className="form-inline">
                            <div className="form-group">
                                <Link to={`/${el.cityCode}`}>{el.cityName}</Link>

                                <button
                                    className="btn btn-danger pull-right"
                                    onClick={() => deleteListItem(el.id)}>
                                    x
                                </button>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul> :
        <p>No cities are available in the region.</p>;


    return (
        <div>
            {component}
        </div>
    );
};

List.propTypes = {
    listItems: PropTypes.array,
    deleteListItem: PropTypes.func,
};

export default List;
