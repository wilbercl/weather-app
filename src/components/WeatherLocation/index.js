import React, {Component} from "react";
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
// import {SUN} from './../../constants/weathers.js';
import transformWeather from './../../services/transformWeather.js';
import {api_weather} from '../../constants/api_url.js';
import CircularProgress from '@material-ui/core/CircularProgress';

// const data ={
//     temperature : 5,
//     weatherState : SUN,
//     humidity : 10,
//     wind : '10 m/s',
// };

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
            data : null,
        };
        console.log("constructor");
    };

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data =>{

            console.log(data);

            this.setState({
            data : transformWeather(data),
            });    
            debugger;
        });
};

    render(){
        console.log("render");
        const {city, data} = this.state;
        return (<div className='weatherLocationCont'>
                    <Location city={city}></Location>
                    {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50}/>}
                    {/* <button onClick={this.handleUpdateClick}>Update</button> */}
                </div>)}
};

export default WeatherLocation;