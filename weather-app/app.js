const request = require('request');
const yargs = require('yargs');

const argv = yargs
.options({
    a:{
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather',
        string: true
    }
}).help().alias('help','h').argv;

//encode and decode string for url
var address = encodeURIComponent(argv);
console.log(address.toString());

request({
    url:'http://www.mapquestapi.com/geocoding/v1/address?key=KQ2jsNksQts8jYzX1GvJHudpVyn6ZGhv&location=1430%20rancho%20hills%20dr',
    json: true
}, (error, response, body) =>{
    //console.log(JSON.stringify(body, undefined, 4));
    console.log(`Address: ${body.results[0].locations[0].street}`);
    console.log(`${body.results[0].locations[0].adminArea5Type}: ${body.results[0].locations[0].adminArea5}`);
    console.log(`latitiude: ${body.results[0].locations[0].latLng.lat}`);
    console.log(`latitiude: ${body.results[0].locations[0].latLng.lng}`);

});