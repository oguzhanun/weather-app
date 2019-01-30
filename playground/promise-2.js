const request = require('request');

const promise_2 = (address) => {

    return new Promise((resolve, reject) => {
        const encodedAddress = encodeURIComponent(address);

        request({
            url:`http://www.mapquestapi.com/geocoding/v1/address?key=5tAh7rP6TXFeUOGprKfeFZynKO5hGEfO&location=${encodedAddress}`,
            json:true
        }, (error, response, body) => {
            if(!error && response.statusCode === 200){
                
                resolve({
                    latitude : body.results[0].locations[0].latLng.lat,
                    longitude : body.results[0].locations[0].latLng.lng
                })
                
            } else {
                reject('Sorry, but something went wrong.... ')
            }
        })
    })
}

promise_2('55040').then((result) => {
    console.log(JSON.stringify(result))
}) //.catch((message) => {
//     console.log('error : ' + message);
// })


module.exports = {
    promise_2
}