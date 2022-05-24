import axios from 'axios';

const oneDayWeatherData = axios.create({
    baseURL: 'https://api.data.gov.sg/v1/environment/24-hour-weather-forecast'
});

export default oneDayWeatherData;