import React, {Component} from "react";
import Location from './Location';
import convert from 'convert-units';
import WeatherData from './WeatherData';
import './styles.css';
import {SUN} from './../../constants/weathers.js';

const location ="Santa Cruz de Tenerife,es";
const api_key ="600a3920bd1bc261a9e892c7546be440";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data ={
    temperature : 5,
    weatherState : SUN,
    humidity : 10,
    wind : '10 m/s',
};

// const data2 ={
//     temperature : 15,
//     weatherState : WINDY,
//     humidity : 20,
//     wind : '20 m/s',
// };

// const WeatherLocation = ()=>(
class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city : "Tenerife",
            data : data,
        };
    };

    getTemp = kelvin =>{
        return Number(convert(kelvin).from("K").to("C").toFixed(2));
    }

    getWeatherState = weather_data =>{
        return SUN;
    };

    getData = weather_data => {
        const {humidity, temp} = weather_data.main;
        const {speed} = weather_data.wind;
        // const {main} = weather_data.weather[0];
        const weatherState = this.getWeatherState(weather_data.weather[0]);

        const data = {
            humidity,
            temperature:this.getTemp(temp),
            wind:`${speed} m/s`,
            weatherState,
        }

        return data;
    };

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data =>{

            console.log(data);

            this.setState({
            data : this.getData(data),
            });    
            debugger;
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