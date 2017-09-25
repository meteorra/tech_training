import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default (PropertyTable) => {
    class CityView extends Component {

        componentDidMount() {
            this.props.fetchForecast(this.props.code);
        }

        render(){
            const {code, forecast} = this.props;

            return (
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h1>Here is {code} weather forecast</h1>
                                <hr/>
                                <PropertyTable tableItems={forecast}  />
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

