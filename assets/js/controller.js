"use strict";

const translator = require('./translate');
const viewer = require('./view');

const activateButton = () => {
    let button = document.getElementById("translate-button");
    button.addEventListener("click", function(){
        let selectDropdown = document.getElementById("language-select");
        let selectedLanguage = selectDropdown.options[selectDropdown.selectedIndex].value;
        let textToTranslate = document.getElementById("translation-text").value;
        viewer.displayTranslation(translator.translate(textToTranslate, selectedLanguage));
    });
};

const populateHTML = () => {
    viewer.displayDropdownItems(translator.getLanguages());
};

module.exports.createPage = () => {
    populateHTML();
    activateButton();
};