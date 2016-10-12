var request = require('request');
var urlTest = 'http://api.open-notify.org/iss-now.json';

function requestJson (url, callback) {
    request.get(url, function (err, result) {
        if (err) {
            // console.log('there is an error');
            callback(err)
        } else {
            
            // console.log(JSON.parse(result.body));
                try {
                    // console.log("trying!");
                    callback(null, JSON.parse(result.bod));
                }
                catch (error)
                {
                    // console.log(JSON.parse(result.bod));
                    callback(error);
                }
        }
    });
}
function print(answer){
        console.log(answer);
    }
// function cb () {
    
// }
requestJson(urlTest, function(value, err){
    if(err){
        console.log('crap');
    } else {
        print(value);
    }
});