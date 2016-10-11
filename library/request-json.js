var request = require('request');

function requestJson(url, callback) {
    request.get(url, function(err, result) {
        if (err) {
            callback(err);
        }
        else {
            try {
                callback(null, JSON.parse(result.body));
            }
            catch (err) {
                callback(err);
            }
        }
    })
}

function showOutput (val) {
    console.log(val);
}

requestJson('http://swapi.co/api/', function (err, input) {
    if (err) {
        console.log('Error alert!');
    } else {
        showOutput(input);
    }
});

exports.requestJson = requestJson;