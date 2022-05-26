import axios from 'axios';

const twoHrWeatherData = axios.create({
    baseURL: 'https://api.data.gov.sg/'
});

export default twoHrWeatherData;