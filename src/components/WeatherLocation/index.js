import React, {Component} from "react";
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather.js';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

// const WeatherLocation = ()=>(
class WeatherLocation extends Component{

    constructor(props){
        super(props);
        const {city} = props;
        this.state = {
            city,
            data : null,
        };
        // console.log("constructor");
    };

    componentDidMount() {
        // console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("componentDidUpdate");
    }

    handleUpdateClick = () => {       
        fetch(getUrlWeatherByCity(this.state.city)).then(resolve => {
            return resolve.json();
        }).then(data =>{
            // console.log(data);
            this.setState({
            data : transformWeather(data),
            });     
        }); 
    };

    render(){
        const {onWeatherLocationClick} = this.props;
        // console.log("render");
        const {city, data} = this.state;

        return (<div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                    <Location city={city}></Location>
                    {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50}/>}
                </div>)}
};

WeatherLocation.propTypes={
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;