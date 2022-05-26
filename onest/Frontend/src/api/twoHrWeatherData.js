import axios from 'axios';
// const axios = require('axios');

const weatherData = axios.create({
    baseURL: 'https://api.data.gov.sg/v1'
});

export default weatherData;