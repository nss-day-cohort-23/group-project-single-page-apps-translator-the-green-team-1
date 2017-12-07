"use strict";

const translator = require('./translate');
const viewer = require('./view');

// set button and text input event listeners
const activateEvents = () => {
    let button = document.getElementById("translate-button");
    button.addEventListener("click", processUserInput);
    let textInput = document.getElementById("translation-text");
    textInput.addEventListener("keyup", processUserInput);
};

// retrieve and translate input value
const processUserInput = () => {
    let selectedLanguage = getRadioValue();
    let textToTranslate = document.getElementById("translation-text").value;
    let translation = translator.translate(textToTranslate, selectedLanguage);
    viewer.displayTranslation(translation);
    viewer.speakTranslation(translation, selectedLanguage);
};

// return the id of the selected radio button
const getRadioValue = () => {
    let radios = document.getElementsByClassName("radio");
    let lang = false;
    [...radios].forEach((element, index) => {
        let radio = radios[index];
        if (radio.checked) {
            lang = radio.id;
        }
    });
    return lang;
};

// populate language choices
const populateHTML = () => {
    viewer.displayDropdownItems(translator.getLanguages());
};

// create elements and activate event listeners on them
module.exports.createPage = () => {
    populateHTML();
    activateEvents();
};