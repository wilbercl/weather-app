import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    SUN, 
    RAIN,
    SNOW,
    WINDY,
} from "./../../../constants/weathers";
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    [SUN]:"day-sunny",
    [CLOUD]:"cloud",
    [CLOUDY]:"cloudy",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [WINDY]:"windy"
};

const sizeIcon = "4x";

const getWeatherIcons = (weatherState) =>{
    const icon = icons[weatherState];
    if(icon)
        return (<span className='wicon'>
                    <WeatherIcons name={icon} size={sizeIcon}/>
                </span>)
    else
        return (<span className='wicon'>
                    <WeatherIcons name={"day-sunny"} size={sizeIcon}/>
                </span>)
};

const WeatherTemperature = ({temperature, weatherState}) => (
<div className='weatherTemperatureCont'>
    {
        getWeatherIcons(weatherState)
    }
    <span className="temperature">{temperature}</span>
    <span className="temperatureType">{`C°`}</span>
</div>
);

WeatherTemperature.propTypes = {
    temperature:PropTypes.number.isRequired,
    weatherState:PropTypes.string.isRequired,
}

export default WeatherTemperature;