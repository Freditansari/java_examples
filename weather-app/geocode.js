/**
 * how to create java script functions using ES6
 * 
 * how to use callback
 */
const request = require('request');

var geocodeAddress =(address, callback)=>{
var encodedAddress= encodeURIComponent(address);

request({
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=KQ2jsNksQts8jYzX1GvJHudpVyn6ZGhv&location=${encodedAddress}`,
    json: true
}, (error, response, body) =>{
   

  
    if (error) {
        callback("no internet connections");
        
    } else if (!body.results[0].locations[0].street){
    
        callback("the address is invalid/cannot find the address")
    
    }else if(body.results[0].locations[0].street){

        callback(undefined, {
            address: body.results[0].locations[0].street,
            city : body.results[0].locations[0].adminArea5,
            latitude : body.results[0].locations[0].latLng.lat,
            longitude : body.results[0].locations[0].latLng.lng
        });
        // console.log(`Address: ${body.results[0].locations[0].street}`);
        // console.log(`${body.results[0].locations[0].adminArea5Type}: ${body.results[0].locations[0].adminArea5}`);
        // console.log(`latitiude: ${body.results[0].locations[0].latLng.lat}`);
        // console.log(`latitiude: ${body.results[0].locations[0].latLng.lng}`);

    }

});
};

module.exports={
    geocodeAddress
};