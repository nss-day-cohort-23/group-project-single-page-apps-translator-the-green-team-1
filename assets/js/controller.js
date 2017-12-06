"use strict";

const translate = require('./translate');
const view = require('./view');

const activateButton = () => {
    let button = document.getElementById("translate-button");
    button.addEventListener("click", function(){
        let selectDropdown = document.getElementById("language-select");
        let selectedLanguage = selectDropdown.options[selectDropdown.selectedIndex].value;
        let textToTranslate = document.getElementById("translation-text").value;
        view.displayTranslation(translate.translate(textToTranslate, selectedLanguage));
    });
};

const populateHTML = () => {
    let selectDropdown = document.getElementById("language-select");
    let languages = translate.getLanguages();
    languages.forEach(element => {
        let optionsDom = document.createElement('option');
        optionsDom.value = element;
        optionsDom.text = element;
        selectDropdown.appendChild(optionsDom);
    });
};

module.exports.createPage = () => {
    populateHTML();
    activateButton();
};