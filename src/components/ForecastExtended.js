import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
import { SUN } from '../constants/weathers';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
]

const data = {
    temperature: 10,
    weatherState: SUN,
    humidity: 10,
    wind: "normal",
}

class ForecastExtended extends Component{
    
    renderForecastItemDays(){
        return days.map(day => (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>))
    }

    render(){
        const {city} = this.props;

        return (<div>
                    <h2 className="forecast-title">Pronostico Extendido para {city}</h2>
                    {this.renderForecastItemDays()}
                </div>)
    }
}

ForecastExtended.protoType = {
    city:PropTypes.string.isRequired,
}

export default ForecastExtended;