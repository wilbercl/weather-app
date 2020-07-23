import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () =>(
    <div>
        <WeatherLocation city="Santa Cruz de Tenerife,es"/>
        <WeatherLocation city="La Habana,cu"/>
        <WeatherLocation city="Mexico, mx"/>
    </div>
);

export default LocationList;
