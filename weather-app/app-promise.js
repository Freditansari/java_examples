/**
 * this app is used as an example of calling api with get in axio module. 
 * how to get axio: npm i axio
 * axio is a simple get http request library
 */
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
    a:{
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather',
        string: true
    }
}).help().alias('help','h').argv;

var encodedAddress= encodeURIComponent(argv.address);

var latitude;
var longitude;


var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=KQ2jsNksQts8jYzX1GvJHudpVyn6ZGhv&location=${encodedAddress}`;

axios.get(geocodeUrl).then((resolve)=>{

    
    if (resolve.data.results[0].locations[0].street ==='') {
        throw new Error('unable to find that address');
    }

    var streetName = resolve.data.results[0].locations[0].street;
    var cityName= resolve.data.results[0].locations[0].adminArea5;
    
    console.log('Weather for : ', streetName, ", ", cityName);

    latitude = resolve.data.results[0].locations[0].latLng.lat;
    longitude = resolve.data.results[0].locations[0].latLng.lng;

    var weatherUrl = `https://api.darksky.net/forecast/7684745a961aa8093a11378081f8c936/${latitude},${longitude}`;

    

    axios.get(weatherUrl).then((weatherResponse)=>{
        // console.log(JSON.stringify(weatherResponse.data.currently, undefined, 2));
        console.log('the temperature is: '+ weatherResponse.data.currently.temperature+ ' but it feels like: '+ weatherResponse.data.currently.apparentTemperature );
    })
    .catch(e =>{
        console.log(e);
    });


}).catch(e =>{
    

    if (e.code === 'ENOTFOUND'){
        console.log('unable to connect to server');
    }else {
        console.log(e.message);
    }
});






