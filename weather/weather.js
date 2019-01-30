const request = require('request');

const weather = (lat, long, callback) => {

    request( {
        url : `https://api.darksky.net/forecast/61c0321f1240ccd89438ee422fb8a568/${lat},${long}`,
        json:true
        }, 
        
        (error, response, body) => {
            
            if(!error && response.statusCode === 200){
                callback(undefined, {
                    temperature : body.currently.temperature,
                    apparentTemperature : body.currently.apparentTemperature    
                });
            } 
            else{
                console.log('something bad happenned')
                callback('something bad happenned')
            }
        }

    )
}

module.exports = {
    weather
}