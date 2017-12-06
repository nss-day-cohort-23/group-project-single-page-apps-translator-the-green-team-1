"use strict";

const translate = require('./translate');
//const view = require('./view');

const activateButton = () => {
    let button = document.getElementById("translate-button");
    button.addEventListener("click", function(){
        let selectDropdown = document.getElementById("language-select");
       // let selectedLanguage = selectDropdown.options[selectDropdown.selectedIndex].value;
        
    });
};

const populateHTML = () => {
    let languages = translate.getLanguages();
    //
};

module.exports.createPage = () => {
    populateHTML();
    activateButton();
};