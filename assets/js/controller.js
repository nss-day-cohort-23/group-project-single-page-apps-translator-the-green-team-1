"use strict";

const translator = require('./translate');
const viewer = require('./view');

const activateEvents = () => {
    let button = document.getElementById("translate-button");
    button.addEventListener("click", processUserInput);
    let textInput = document.getElementById("translation-text");
    textInput.addEventListener("keypress", processUserInput);
};

const processUserInput = () => {
    let selectedLanguage = getRadioValue();
    alert(selectedLanguage);
    let textToTranslate = document.getElementById("translation-text").value;
    viewer.displayTranslation(translator.translate(textToTranslate, selectedLanguage));
};

const getRadioValue = () => {
    let radios = document.getElementsByClassName("radio");
    [...radios].forEach(radio => {
        if (radio.checked) {
            return radio.id;
        }
    });
};

const populateHTML = () => {
    viewer.displayDropdownItems(translator.getLanguages());
};

module.exports.createPage = () => {
    populateHTML();
    activateEvents();
};