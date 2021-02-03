import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
import { SUN } from '../constants/weathers';
import getUrlForecastByCity from './../services/getUrlForecastByCity.js';
import transformForecast from './../services/transformForecast.js';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
]

// const data = {
//     temperature: 10,
//     weatherState: SUN,
//     humidity: 10,
//     wind: "normal",
// }

class ForecastExtended extends Component{
    
    constructor(){
        super();
        this.state={forecastData:null}
    }

    componentDidMount() {
        //fecth or axios
        fetch(getUrlForecastByCity(this.props.city)).then(
                                                            data => (data.json()).then(
                                                                weather_data => {
                                                                    console.log(weather_data);
                                                                    const forecastData = transformForecast(weather_data);
                                                                    console.log(forecastData);
                                                                    this.setState({
                                                                        forecastData 
                                                                        });
                                                                }
                                                            ))
    }
    

    renderForecastItemDays(){
        return <h1>Index... </h1>
        // return days.map(day => (<ForecastItem weekDay={day} hour={10} data={this.state.forecastData}></ForecastItem>))
    }

    renderProgress(){
        return "Cargando Pronostico Extendido"
    }

    render(){
        const {city} = this.props;
        const {forecastData} = this.state;

        return (<div>
                    <h2 className="forecast-title">Pronostico Extendido para {city}</h2>
                    {forecastData ?
                        this.renderForecastItemDays():
                        this.renderProgress()
                    }
                </div>)
    }
}

ForecastExtended.protoType = {
    city:PropTypes.string.isRequired,
}

export default ForecastExtended;