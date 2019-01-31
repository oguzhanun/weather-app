console.log('geocode starting...')

const request = require('request');


const geocode =  (address, callback) => {
    const encodedAddress = encodeURIComponent(address);

    request({
        url:`http://www.mapquestapi.com/geocoding/v1/address?key=YOUR_KEY&location=${encodedAddress}`,
        json:true
    },(error,response,body)=>{

        if(!error){ //console.log(error);
            
            if(response.statusCode === 200){ //console.log('response: ',response);
                
                if(body.results[0].locations.length !== 0){
                    callback( undefined, {
                        address : body.results[0].providedLocation.location,
                        latitude : body.results[0].locations[0].latLng.lat,
                        longitude : body.results[0].locations[0].latLng.lng
                    } );
                } 
                else {
                    callback('There is no address in this name');
                }
            }
        } 
        else if(error) {
            callback('Sorry, Google servers are not available for now!')
        }
    })
}

module.exports = {
    geocode
}
