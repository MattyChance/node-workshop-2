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


// requestJson('www.freecodecamp', function (err, input) {
//     if (err) {
//         console.log('Error alert!');
//     } else {
//         showOutput(input);
//     }
// });

function callback (err, input) {
    if (err) {
        console.log('There was an error somewhere.');
    } else {
        showOutput(input);
    }
}

module.exports = requestJson;