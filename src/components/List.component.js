import React from 'react';
import PropTypes from 'prop-types';

// TODO: discuss if there are no outer dependecies should we wrap component into a function
const List = (props) => {
    return (
        <div>
            <ul>
                {
                    props.listItems.map((el) => (
                        <li
                            key={el.id}>
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
