"use strict";

// Translates text into destLang.  If word is found, translate it, if the word is not found, keep the untranslated word in the translated text.
module.exports.translate = (text, destLang) => {
    let lang;

    switch(destLang) {
        case "zulu":
            lang = require("./zulu");
            break;
        case "spanish":
            lang = require("./spanish");
            break;
        case "welsh":
            lang = require("./welsh");
            break;
        case "gaelic":
            lang = require("./gaelic");
    }

    let lexicon = lang.getLexicon(),
        sentenceArray = text.split(" "),
        translation = sentenceArray.map(word => canTranslate(lexicon, word) ? lexicon[cleanWord(word)] : word ).join(" ");

    return translation;
};

// Checks if a word is in the lexicon.  Returns true if word is in lexicon, false if it is not.
const canTranslate = (lexicon, word) => {
    return lexicon[cleanWord(word)] !== undefined;
};

// Returns string to  lower case and removes extra signs that can't be translated
const cleanWord = (word) => {
    return word.toLowerCase().replace(/['\",!.]/, "");
};

// Returns a list of possible languages to translate from
module.exports.getLanguages = () => {
    return [
        "zulu",
        "spanish",
        "gaelic",
        "welsh"
    ];
};