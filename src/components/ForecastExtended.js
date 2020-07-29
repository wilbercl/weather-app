import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ForecastExtended extends Component{
    
    render(){
        const {city} = this.props;

        return (<div>
                    Pronostico Extendido para {city}
                </div>)
    }
}

ForecastExtended.protoType = {
    city:PropTypes.string.isRequired,
}

export default ForecastExtended;