import React from 'react';
import List from '../../components/List';

class CityListView extends React.Component {

    deleteListItem = (i) => {
        this.props.deleteListItem(i)
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1>Discover the weather in Belarus cities</h1>
                            <hr/>
                            <List
                                listItems={this.props.cityList.list}
                                deleteListItem={this.deleteListItem}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CityListView;
