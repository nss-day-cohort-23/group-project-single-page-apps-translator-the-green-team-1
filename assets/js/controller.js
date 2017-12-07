"use strict";

const translator = require('./translate');
const viewer = require('./view');

const activateEvents = () => {
    let button = document.getElementById("translate-button");
    button.addEventListener("click", processUserInput);
    let textArea = document.getElementById("translation-text");
    textArea.addEventListener("keypress", processUserInput);
};

const processUserInput = () => {
    let selectDropdown = document.getElementById("language-select");
    let selectedLanguage = selectDropdown.options[selectDropdown.selectedIndex].value;
    let textToTranslate = document.getElementById("translation-text").value;
    viewer.displayTranslation(translator.translate(textToTranslate, selectedLanguage));
    console.log("test");
};

const populateHTML = () => {
    viewer.displayDropdownItems(translator.getLanguages());
};

module.exports.createPage = () => {
    populateHTML();
    activateEvents();
};