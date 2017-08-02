import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
    return (
        <div>
            <ul>
                {
                    props.listItems.map((el) => (
                        <li
                            key={el.id} className="list-item city-list-item">
                            <div className="form-inline">
                                <div className="form-group">
                                    <a href="javascript: void(0)" onClick={() => props.changeRoute(`/${el.cityCode}`)}>
                                        {el.cityName}
                                    </a>

                                    <button
                                        className="btn btn-danger pull-right"
                                        onClick={() => props.deleteListItem(el.id)}>
                                        x
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

List.propTypes = {
    listItems: PropTypes.array,
    deleteListItem: PropTypes.func,
};

export default List;
