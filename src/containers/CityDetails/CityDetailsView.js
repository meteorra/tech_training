import React from 'react';

class CityDetailsView extends React.Component {
    render(){
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1>City View</h1>
                            <hr/>
                            <div>Here is a city weather forecast</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CityDetailsView;

