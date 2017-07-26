import React from 'react';
import PropTypes from 'prop-types';
import List from '../../components/List.component';

class CitiesView extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1>Discover the weather in Belarus cities</h1>
                            <hr/>
                            <List
                                changeRoute={this.props.changeRoute}
                                listItems={this.props.cities}
                                deleteListItem={this.props.deleteListItem}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CitiesView.propTypes = {
    changeRoute: PropTypes.func,
    deleteListItem: PropTypes.func,
    cities: PropTypes.array,
};

export default CitiesView;
