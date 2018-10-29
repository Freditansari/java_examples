
const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./weather');
const request = require('request');

var lat;
var lon;

const argv = yargs
.options({
    a:{
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather',
        string: true
    }
}).help().alias('help','h').argv;



geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }
    else{
        
        console.log(JSON.stringify(results, undefined, 2));
        lat = results.latitude; 
        lon = results.longitude;
        weather.weatherForecast(lat,lon,(weatherResults)=>{
            console.log(weatherResults);
        });
  
    }
});




// weather.weatherForecast(lat,lon, (weatherError, weatherResults)=>{

//     console.log(weatherResults);
// });