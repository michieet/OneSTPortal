import { useState, useEffect } from 'react';
import twoHrWeatherData from '../api/twoHrWeatherData';
import ViewData from '../components/viewData';
// import oneDayWeatherData from '../api/oneDayWeatherData';
// import fourDaysWeatherData from '../api/fourDaysWeatherData';

function InputWeather () {

    const [location, setLocation] = useState();
    const [weatherData, setWeatherData] = useState([]);

    const apiGetDetails = async () => {
        const {status, data} = await twoHrWeatherData.get(`/environment/2-hour-weather-forecast`);
        if (status === 200) {
            console.log('apiGetDetails', data);
            setWeatherData();
        } else {
            console.log('Error');
        }
    };

    const handleSubmit = async () => {
        console.log('handleSubmit:');
        setLocation(location);
    };

    const handleInput = () => {
        // const {name, value} = e.target;
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
                value={weatherData}
                onChange={handleInput}
                />
                <button
                className='button'
                onClick={handleSubmit}
                >Submit</button>
            </form>
            
        </div>
    )
};

export default InputWeather;