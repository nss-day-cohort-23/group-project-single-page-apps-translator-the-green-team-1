"use strict";

function translate(text, destLang) {
    let lang;
    // assumption: destination languages = ["spanish", "zulu", "gaelic", "welsh"]
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
    let lexicon = lang.getLexicon();
    let sentence = text.split(" ");
    let translation = sentence.map(word => lexicon[word.toLowerCase().replace(/['\",!.]/, "")] !== undefined ? lexicon[word.toLowerCase().replace(/['\",!.]/, "")] : word).join(" ");

    return translation;
}

function getLanguages() {
    return [
        "zulu",
        "spanish",
        "gaelic",
        "welsh"
    ];
}

module.exports = {translate, getLanguages};