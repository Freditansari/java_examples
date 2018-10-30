const request = require('request');

var geocodeAddress = (address) =>{
    return new Promise((resolve, reject)=>{
        var encodedAddress= encodeURIComponent(address);
        request({
            url:`http://www.mapquestapi.com/geocoding/v1/address?key=KQ2jsNksQts8jYzX1GvJHudpVyn6ZGhv&location=${encodedAddress}`,
            json: true
        }, (error, response, body) =>{
            if (error) {
                reject("no internet connections");
                
            } else if (!body.results[0].locations[0].street){
            
                reject("the address is invalid/cannot find the address")
            
            }else if(body.results[0].locations[0].street){
                var resolveTemplate = {
                    address: body.results[0].locations[0].street,
                    city : body.results[0].locations[0].adminArea5,
                    latitude : body.results[0].locations[0].latLng.lat,
                    longitude : body.results[0].locations[0].latLng.lng
                };
        
                resolve(resolveTemplate);
        
            }
        
        });
    });

};

geocodeAddress('Benyamin sueb').then((location) =>{
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage)=>{
    console.log(errorMessage);
});