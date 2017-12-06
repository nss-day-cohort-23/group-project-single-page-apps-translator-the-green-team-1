"use strict";

// function that outputs the translated text to the dom after it has been translated/
// first it gets the 
// populate the dropdown menu with the available laguanges

const displayTranslation = function(translation) {
    const translatedTextOutputBox = document.getElementById("output-text");
    translatedTextOutputBox.innerHTML = translation;
};

const displayDropdownItems = function(languages){
    const dropdownMenu = document.getElementById("language-select");
    languages.forEach(element => {
        dropdownMenu.innerHTML+=`<option value='${element}'>${element}</option>`;
    });
};

module.exports = {displayTranslation, displayDropdownItems};