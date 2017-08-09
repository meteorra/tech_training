import React from 'react';
import PropTypes from 'prop-types';

export default (PropertyTable) => {
    class CityView extends React.Component {

        componentDidMount() {
            this.props.fetchForecast(this.props.code);
        }

        render(){
            return (
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h1>Here is {this.props.code} weather forecast</h1>
                                <hr/>
                                <PropertyTable tableItems={this.props.forecast}  />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    CityView.propTypes = {
        fetchForecast: PropTypes.func,
        code: PropTypes.string,
        forecast: PropTypes.object,
    };

    return CityView;
};

