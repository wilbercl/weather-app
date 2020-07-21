import React, {Component} from "react";
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {SUN, WINDY} from './../../constants/weathers.js';

const data ={
    temperature : 5,
    weatherState : SUN,
    humidity : 10,
    wind : '10 m/s',
};

const data2 ={
    temperature : 15,
    weatherState : WINDY,
    humidity : 20,
    wind : '20 m/s',
};

// const WeatherLocation = ()=>(
class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city : "La Habana",
            data : data,
        };
    };

    handleUpdateClick = () => {
        console.log("update");

        this.setState({
            data : data2,
        });
};

    render(){
        const {city, data} = this.state;
        return (<div className='weatherLocationCont'>
                    <Location city={city}></Location>
                    <WeatherData data={data}></WeatherData>
                    <button onClick={this.handleUpdateClick}>Update</button>
                </div>)}
};

export default WeatherLocation;