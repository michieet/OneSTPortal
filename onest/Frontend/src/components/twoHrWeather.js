import twoHrWeatherData from '../api/twoHrWeatherData';


const twoHr = async () => {

    await twoHrWeatherData.get('v1/environment/2-hour-weather-forecast')
    .then((response) => {
        const twoHrData = response.data;
        console.log('Data received', twoHrData);
    }).catch 
};
