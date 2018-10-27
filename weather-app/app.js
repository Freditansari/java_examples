const request = require('request');

request({
    url:'http://www.mapquestapi.com/geocoding/v1/address?key=KQ2jsNksQts8jYzX1GvJHudpVyn6ZGhv&location=1430%20rancho%20hills%20dr',
    json: true
}, (errror, response, body) =>{
    console.log(JSON.stringify(body, undefined, 4));

});