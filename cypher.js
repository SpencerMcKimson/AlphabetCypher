const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

class Cypher {

    constructor() {
        this.matrix = {};

        let count = 0;
        let index = 1;
        let placeholderAlphabet = ALPHABET;
        
        while (count < ALPHABET.length) {
            let firstLetter = placeholderAlphabet.charAt(0);
            let remainingLetters = placeholderAlphabet.substring(1, ALPHABET.length);

            this.matrix[firstLetter] = {};
            this.matrix[firstLetter]['a'] = firstLetter;

            for(let char of remainingLetters) {
                this.matrix[firstLetter][ALPHABET.charAt(index)] = char;
                index++;
            }

            placeholderAlphabet = remainingLetters.concat(firstLetter);
            count++;
            index = 1;
        }
    }

    encryptString(keywordString, phrase) {
        let encryptedString = '';
        for (let i = 0; i < phrase.length; i++) {
            encryptedString = encryptedString.concat(this.matrix[keywordString.charAt(i)][phrase.charAt(i)]); 
        }

        return encryptedString;
    }

    decryptString(keywordString, phrase) {
        let encryptedString = '';
        for (let i = 0; i < phrase.length; i++) {
            encryptedString = encryptedString.concat(this.getKeyByValue(this.matrix[keywordString.charAt(i)], phrase.charAt(i))); 
        }

        return encryptedString;
    }

    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
}

module.exports = Cypher;