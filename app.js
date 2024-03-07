//WEB SERVER FOR ELECTRICITY USAGE PLANNING: WEB PAGES AND API

// lIBRARIES AND MODULES

// Use Express as web engine
const express = require('express');
// Use Express Handlebars as template engine
const {engine} = require('express-handlebars');

// Get external data with node-fetch for version 2.x
// This version should be installed as follows :npm install node-fetch@2
// const fetch = require('node-fetch')

// Get external data with node-fetch for verion 3.x
// import fetch from 'node-fetch';

const { round } = require('mathjs');

// EXPRESS APPLICATION SETTINGS

// Home made module to get current price

const dynamicData = require('./getPageData')

// Create the server
const app = express();
const PORT = process.env.Port || 8080;

// Set folder pahts: public is for assets and views for pages
app.use(express.static('public'));
app.set('views', './views');

// Engine settings
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// URL ROUTES

// Route to home page
app.get('/', (req, res) => {
    let homePageData = {
        'price': 0,
        'hour': 0,
        'nextPrice': 0,
        'nextHour': 0,
        'temperature': 0,
        'wind_speed': 0,
        'average': 0,
        'highest': 0,
        'lowest': 0,
    };

    dynamicData.getHourlyPrice().then((resultset) => {
        homePageData.price = resultset.rows[0]['price']
        homePageData.hour = resultset.rows[0]['hour']
        homePageData.nextPrice = resultset.rows[1]['price']
        homePageData.nextHour = resultset.rows[1]['hour']
        
        dynamicData.getCurrentTemperature().then((resultset) => {
            homePageData.temperature = resultset.rows[0]['temperature']
            
            dynamicData.getCurrentWind_speed().then((resultset) => {
                homePageData.wind_speed = resultset.rows[0]['wind_speed']

                dynamicData.getAverageOfCurrentAndNextDay().then((resultset) => {
                    homePageData.average = round(resultset.rows[1]['keskihinta'], 2)

                    dynamicData.getHighestPriceOfCurrentAndNextDay().then((resultset) => {
                        homePageData.highest = round(resultset.rows[1]['yläraja'], 2)

                        dynamicData.getLowestPriceOfCurrentAndNextDay().then((resultset) => {
                            homePageData.lowest = round(resultset.rows[1]['alaraja'])
                            res.render('index', homePageData)
                        })
                    })
                })
            })
        })
    })
})

// Route to viikkoennuste page
app.get('/viikkoennuste', (req, res) => {
    dynamicData.getWeatherForecast().then((resultset) => {
        var tableData = resultset.rows; 
        

        xhours = JSON.stringify(resultset.rows.map(row => Number(row.hour)));
        
        yprices = JSON.stringify(resultset.rows.map(row => row.temperature)); 
              
        let chartPageData = {'hours': xhours, 'temperature': yprices, 'tableData': tableData}
        

    res.render('viikkoennuste', chartPageData)

    })
})

// Route to hourlyprices page

app.get('/hourlyprices', (req, res) => {
    dynamicData.getHourlyPrice().then((resultset) => {
        var tableData = resultset.rows;
        
        
        
        let tableHours = [];
        let tablePrices = [];
        
        for (i in tableData) {
            let hourStr = tableData[i]['hour'];
            let hourNr = Number(hourStr)
            tableHours.push(hourNr)
            
            let priceNr = tableData[i]['price'];
            tablePrices.push(priceNr)
        }
        
        let jsonTableHours = JSON.stringify(tableHours);
        
        let jsonTablePrices = JSON.stringify(tablePrices);
        
        let chartPageData = { 
            'chartHours': jsonTableHours, 
            'chartPrices': jsonTablePrices, 
            'tableData': tableData,
            'average': 0,
            'highest': 0,
            'lowest': 0,
        };

        dynamicData.getAverageOfCurrentAndNextDay().then((resultset) => {
            chartPageData.average = round(resultset.rows[1]['keskihinta'], 2)

            dynamicData.getHighestPriceOfCurrentAndNextDay().then((resultset) => {
                chartPageData.highest = round(resultset.rows[1]['yläraja'], 2)

                dynamicData.getLowestPriceOfCurrentAndNextDay().then((resultset) => {
                    chartPageData.lowest = round(resultset.rows[1]['alaraja'])
                    res.render('hourlyprices', chartPageData);
                    
                })
            })
        })
        
    })
    
});

// START THE LISTENER
app.listen(PORT);
console.log('Server started and it will listen PCP port', PORT);