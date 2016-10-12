var prompt = require("prompt");
var SynonymAPI = require('./library/synonyms.js');

function checkWord () {
    prompt.get('Get the synonym of your word', function (err, userWord) {
        if (err) {
            console.log('An error occured when you check the word');
        } else {
            var checkUsersWord = new SynonymAPI('3c50b0c4b5cc99f6aa9d77b96b236238');
            var theWord = userWord['Get the synonym of your word'];
            checkUsersWord.getSynonyms(theWord, function (err, data) {
                if (err) {
                    console.log(err, 'An error happened when the Thesaurus API');
                } else {
                    console.log(data);
                }
            });
        }
    })
}
checkWord();