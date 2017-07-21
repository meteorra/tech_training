import React from 'react';
import { fetchCityForecast } from '../../redux/modules/cityDetailsModule';
import PropertyTable from '../../components/PropertyTableComponent';

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
                            <PropertyTable tableItems={this.props.cityDetails.forecast}  />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CityDetailsView;

