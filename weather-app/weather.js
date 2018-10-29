const request = require('request');

var weatherForecast = (latitude, longitude, callback)=>{
    request({
        url:`https://api.darksky.net/forecast/7684745a961aa8093a11378081f8c936/${latitude},${longitude}`,
        json: true
    }, (error, response, body) =>{
        if(!error&&response.statusCode ===200){
            callback(body.currently);

        }else{
            console.log("unable to fetch from forecast.io server");

        }

        

        
    });
};

module.exports={
    weatherForecast
};