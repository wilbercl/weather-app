const location ="Santa Cruz de Tenerife,es";
const api_key ="600a3920bd1bc261a9e892c7546be440";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;