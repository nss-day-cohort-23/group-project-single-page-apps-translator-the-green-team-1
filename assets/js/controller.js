"use strict";

const translator = require('./translate');
const viewer = require('./view');

const activateEvents = () => {
    let button = document.getElementById("translate-button");
    button.addEventListener("click", processUserInput);
    let textInput = document.getElementById("translation-text");
    textInput.addEventListener("keyup", processUserInput);
};

const processUserInput = () => {
    let selectedLanguage = getRadioValue();
    let textToTranslate = document.getElementById("translation-text").value;
    viewer.displayTranslation(translator.translate(textToTranslate, selectedLanguage), selectedLanguage);
};

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

const populateHTML = () => {
    viewer.displayDropdownItems(translator.getLanguages());
};

module.exports.createPage = () => {
    populateHTML();
    activateEvents();
};