import React from 'react';

const PropertyTable = (props) => {
    return (
        <div>
            <div>Current temperature: {props.tableItems.temp}</div>
            <div>Current visibility: {props.tableItems.visibility}</div>
            <div>Current speed of wind: {props.tableItems.windSpeed}</div>
        </div>
    )

};

export default PropertyTable;
