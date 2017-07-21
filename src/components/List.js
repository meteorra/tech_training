import React from 'react';
import Link from 'react-router-redux-dom-link';

const List = (props) => {
    return (
        <div>
            <ul>
                {
                    props.listItems.map((el, i) => (
                        <li
                            key={i}>
                            <div className="form-inline">
                                <div className="form-group">
                                    <Link to={`/${el.cityCode}`}>{el.cityName}</Link>
                                    <button
                                        className="btn btn-danger pull-right"
                                        onClick={props.deleteListItem.bind(null, i)}>
                                        x
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default List;
