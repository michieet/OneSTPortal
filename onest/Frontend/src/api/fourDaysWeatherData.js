import axios from 'axios';

const fourDaysWeatherData = axios.create({
    baseURL: 'https://api.data.gov.sg/v1/environment/4-day-weather-forecast'
});

export default fourDaysWeatherData;