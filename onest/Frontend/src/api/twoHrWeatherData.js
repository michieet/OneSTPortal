import axios from 'axios';
// const axios = require('axios');

const twoHrWeatherData = axios.create({
    baseURL: 'https://api.data.gov.sg/v1/environment/2-hour-weather-forecast'
});

export default twoHrWeatherData;