import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const LocationList = ({cities}) =>{
    const handleWeatherLocationClick = (city, onSelectedLocation) =>{
        console.log("handleWeatherLocationClick");
        debugger;
        onSelectedLocation(city);
    };

    const strToComponents = (cities) =>(
        cities.map( city => (
            <WeatherLocation 
                key={city} 
                city={city}
                onWeatherLocationClick={() => handleWeatherLocationClick(city)}/>))
    );

    return (<div> 
                {strToComponents(cities)}
            </div>)
};

LocationList.propTypes = {
    cities:PropTypes.array.isRequired,
    onSelectedLocation:PropTypes.func,
}
export default LocationList;
