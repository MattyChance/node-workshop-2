var requestJson = require('./request-json.js');

function SynonymAPI (apiKey) {
    this.apiKey = apiKey;
}

SynonymAPI.prototype.getSynonyms = function(word, callback) {
    var thesaurusApi = 'http://words.bighugelabs.com/api/2/'; //{api key}/{word}/{format}
    var apiUrl = thesaurusApi + this.apiKey + '/' + word + '/json';
    requestJson(apiUrl, function(err, output) {
        if (err) {
            console.log(err, "THIS IS HERE");
        }
        else {
            callback(null, output);
        }
    });
}

module.exports = SynonymAPI;