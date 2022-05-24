import React from 'react';

export default function ViewData(props) {
    const {data} = props;

    return (
        <div>
            <h2>Weather Data</h2>
            <h4>{data.forecasts}</h4>
            Location: {data.forecasts.area}

        </div>
    )
};