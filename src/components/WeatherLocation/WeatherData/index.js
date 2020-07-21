import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import PropTypes from 'prop-types';
// import {
//     SUN, 
// } from "./../../../constants/weathers";
import './styles.css';

const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => (
    // const {temperature, weatherState, humidity, wind} = data
    <div className='weatherDataCont'>
        <WeatherTemperature 
            temperature={temperature} 
            weatherState={weatherState}
        />
        <WeatherExtraInfo 
            humidity={humidity} 
            wind={wind}
        />
    </div>
);

WeatherData.propType = {
    data:PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,
    }),
}

export default WeatherData;