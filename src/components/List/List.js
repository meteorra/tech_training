import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const List = ({listItems, changeRoute, deleteListItem}) => {

    const _changeRoute = (e, code) => {
        e.preventDefault();
        changeRoute(`/${code}`);
    };

    const component = listItems.length ?
        <ul className="list city-list">
            {
                listItems.map((el) => (
                    <li
                        key={el.id} className="list-item city-list-item">
                        <div className="form-inline">
                            <div className="form-group">
                                <a href="#" onClick={(e) => _changeRoute(e, el.cityCode)}>
                                    {el.cityName}
                                </a>

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
