import { useState, useEffect } from 'react';
import twoHrWeatherData from '../api/twoHrWeatherData';
import ViewData from '../components/viewData';
// import oneDayWeatherData from '../api/oneDayWeatherData';
// import fourDaysWeatherData from '../api/fourDaysWeatherData';

export default function InputWeather () {

    const [location, setLocation] = useState();
    const [weatherData, setWeatherData] = useState([]);

    const apiGetDetails = async () => {
        const {status, data} = await weatherData.get(`https://api.data.gov.sg/v1/environment/2-hour-weather-forecast`);
        if (status === 200) {
            console.log('apiGetDetails', data);
            const d = data[0];
            const temp= {
                location: d.area,
                forecast: d.forecast,
                date: d.update_timestamp.split(" ")[0]
            }
            setWeatherData(temp);
        } else {
            console.log('Error');
        }
    };

    const handleSubmit = async () => {
        console.log('handleSubmit:');
        setLocation();
    };

    const handleInput = () => {
        setLocation();
    };

    useEffect( () => {
        console.log('App.useEffect');
        if (location)
            apiGetDetails(location);
    }, [location]);

    return (
        <div>
            <form>
                <input
                className='inputField'
                type='text'
                placeholder='Enter location'
                value={location}
                onChange={handleInput}
                />
                <button
                className='button'
                onClick={handleSubmit}
                >Submit</button>
            </form>
            <ViewData data={weatherData}></ViewData>         
        </div>
    )
};