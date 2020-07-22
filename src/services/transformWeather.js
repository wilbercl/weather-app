import convert from 'convert-units';
import {SUN} from './../constants/weathers.js';

const getTemp = kelvin =>{
    return Number(convert(kelvin).from("K").to("C").toFixed(2));
}

const getWeatherState = weather_data =>{
    return SUN;
};

const transformWeather = weather_data => {
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    // const {main} = weather_data.weather[0];
    const weatherState = getWeatherState(weather_data.weather[0]);

    const data = {
        humidity,
        temperature:getTemp(temp),
        wind:`${speed} m/s`,
        weatherState,
    }

    return data;
};

export default transformWeather;