
const cron = require('node-cron');
const settings = require('./database_and_timer_settings.json');
const forecast = require('./getFmiForecastData');

const database = settings.database;
const weather_timer = settings.weather_timer;

const addTemperature = new forecast.WeatherForecastTimeValue('Turku', 'Temperature', 'temperature')
const addWindX = new forecast.WeatherForecastTimeValue('Turku', 'WindUMS', 'wind_vector_x')
const addWindY = new forecast.WeatherForecastTimeValue('Turku', 'WindVMS', 'wind_vector_y')


cron.schedule(weather_timer, () => {
    addTemperature.putTimeValuePairsToDb().then(() => {
        addWindX.putTimeValuePairsToDb().then(() => {
            addWindY.putTimeValuePairsToDb()
        })
    })
})