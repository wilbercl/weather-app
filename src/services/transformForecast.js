import moment from 'moment';

const transformForecast = weather_data => (

    weather_data.list.filter(item => (
        moment.unix(item.dt).hour() === 6 ||
        moment.unix(item.dt).hour() === 12 ||
        moment.unix(item.dt).hour() === 18
    ))
);

export default transformForecast;