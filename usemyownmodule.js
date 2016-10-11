var requestJson = require('./library/request-json.js');
var prompt = require('prompt');

var weatherURL = 'https://api.darksky.net/forecast/0e5d36966d4c2aee0a2baa3f22191651/';

var userLocation = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

function weatherForecast() {
    prompt.get('Enter your city name', function(err, userInput) {
        if (err) {
            return err;
        } else {
            var usersCity = userInput['Enter your city name'];
            var useGoogleLocation = userLocation + usersCity;
            requestJson(useGoogleLocation, function (err, locationData) {
                if (err) {
                    console.log('There was an error when Google tries to locate you');
                } else {
                    var userLat = locationData.results[0].geometry.location.lat;
                    var userLon = locationData.results[0].geometry.location.lng;
                    var userWeather = weatherURL + userLat + ',' + userLon;
                    requestJson(userWeather, function (err, weatherData) {
                        if (err) {
                            console.log('An error happened when you request weather data.');
                        } else {
                            console.log('The current weather in your city is: ' + weatherData.currently.icon);
                            console.log('In next five days: ' + weatherData.daily.summary);
                        }
                    })
                }
            })
        }
    });
}

weatherForecast();