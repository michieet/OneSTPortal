import React from 'react';

export default function ViewData(props) {
    const {data} = props;

    return (
        <div>
            <h3>Weather Data</h3>
            <h4>{data.location}</h4>
            Forecast: {data.forecast}

        </div>
    )
};