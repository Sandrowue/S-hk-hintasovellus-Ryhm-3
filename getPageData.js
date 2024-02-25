const Pool = require('pg').Pool; 
const settings = require('./database_and_timer_settings.json');

const database = settings.database;

const pool = new Pool(
    database
);

// gets current elecricity price
const getCurrentPrice = async () => {
    let resultset = await pool.query('SELECT price FROM public.current_prices');
    return resultset;
}

// gets confirmed elecricity price of coming hours and two days
const getHourlyPrice = async () => {
    let resultset = await pool.query('SELECT * FROM public.hourly_page');
    console.log(resultset)
    return resultset;
}

// gets only day of confirmed elecrticity price
/*const getDay = async () => {
    let resultset = await pool.query('SELECT day FROM public.hourly_page');
    return resultset;
}

// gets only hour of confirmed electricity price
const getHour = async () => {
    let resultset = await pool.query('SELECT hour FROM public.hourly_page');
    return resultset;
}

// gets only price of confirmed elecricity price
const getPrice = async() => {
    let resultset = await pool.query('SELECT price FROM public.hourly_page');
    return resultset
}*/

// gets only temperature from weather observation data
const getCurrentTemperature = async () => {
    let resultset = await pool.query('SELECT temperature FROM public.weather_observation ORDER BY timestamp DESC LIMIT 1')
    return resultset;
}

// gets only wind direction from weather observation data
const getCurrentWind_direction = async () => {
    let resultset = await pool.query('SELECT wind_direction FROM public.weather_observation ORDER BY timestamp DESC LIMIT 1')
    return resultset
}

// gets only wind speed from weather observation data
const getCurrentWind_speed = async () => {
    let resultset = await pool.query('SELECT wind_speed FROM public.weather_observation ORDER BY timestamp DESC LIMIT 1')
    return resultset;
}

// gets weather forecast data (temperature and wind vectors)
const getWeatherForecast = async () => {
    let resultset = await pool.query('SELECT * FROM public.forecast_temp_wind_vector_and_wind_speed ORDER BY timestamp DESC LIMIT 10')
    return resultset;
}

// gets weather observation data (temperature, wind direction, wind speed, time, place, coordinates)
const getWeatherObservation = async () => {
    let resultset = await pool.query('SELECT * FROM public.weather_observation ORDER BY timestamp DESC LIMIT 10')
    console.log(resultset)
    return resultset;

}

module.exports = {
    getCurrentPrice,
    getHourlyPrice,
    getCurrentTemperature,
    getCurrentWind_direction,
    getCurrentWind_speed,
    getWeatherForecast,
    getWeatherObservation,
    /*getDay,
    getHour,
    getPrice*/
}

// getTemperatureForecast()
getWeatherObservation()

