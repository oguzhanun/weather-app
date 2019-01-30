const yargs = require('yargs');
const geo = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');


const argv = yargs.options({
    a:{
        describe:'This is the address for fetching the weather',
        alias:'address',
        demand:true,
        string:true
    }
}).help().alias('help', 'h').argv;

console.log(argv); 

geo.geocode(argv.address, (errorMessage, result) => {
    if(errorMessage){
        console.log(errorMessage);
    } else {

        console.log(JSON.stringify( result, undefined, 10 ) )

        weather.weather(result.latitude, result.longitude, (error, temp) => {
            if(!error){
                console.log(`the temperature is : ${temp.temperature} F (but) it feels like ${temp.apparentTemperature} F`)
            }
        })
    }
} );



