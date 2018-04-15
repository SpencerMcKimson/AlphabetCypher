const Cypher = require('./cypher');

const buildKeywordString = (keyword, phrase) => {
    let keywordString = '';
    let index = 0;

    while (index < phrase.length) {
        for (let char of keyword) {
            index++;
            keywordString = keywordString + char; 
            if (index === phrase.length) break;
        }
    }

    return keywordString;
}

const encryptString = (keyword, phrase) => {
    keyword = keyword.toLowerCase().replace(' ', '');
    phrase = phrase.toLowerCase().replace(' ', '');

    let cypher = new Cypher();

    let keywordString = buildKeywordString(keyword, phrase);

    let newString = cypher.encryptString(keywordString, phrase);
    console.log(newString);
}

const decryptString = (keyword, phrase) => {
    keyword = keyword.toLowerCase().replace(' ', '');
    phrase = phrase.toLowerCase().replace(' ', '');

    let cypher = new Cypher();

    let keywordString = buildKeywordString(keyword, phrase);

    let newString = cypher.decryptString(keywordString, phrase);
    console.log(newString);
}

module.exports = { encryptString, decryptString };