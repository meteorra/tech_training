import React from 'react';
import { fetchCityForecast } from '../../redux/modules/cityDetails';

class CityDetailsView extends React.Component {

    // Where is the best place to make a fetch request if it depends on url params?
    componentDidMount() {
        this.props.dispatch(
            fetchCityForecast(this.props.match.params.city)
        );
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1>Here is {this.props.match.params.city} weather forecast</h1>
                            <hr/>
                            <div>Current temperature: {this.props.cityDetails.forecast.temp}</div>
                            <div>Current visibility: {this.props.cityDetails.forecast.visibility}</div>
                            <div>Current speed of wind: {this.props.cityDetails.forecast.windSpeed}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CityDetailsView;

