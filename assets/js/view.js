"use strict";

// function that outputs the translated text to the dom after it has been translated/
// first it gets the 
// populate the dropdown menu with the available laguanges

const displayTranslation = function(translation, language) {
    const translatedTextOutputBox = document.getElementById("output-text");
    translatedTextOutputBox.innerHTML = translation;

    /* ResponsiveVoice used under Non-Commercial License https://responsivevoice.org/ */
    /* jshint ignore:start */
    switch(language) {
        case "zulu":
            console.log("here");
            responsiveVoice.speak(translation, "Swahili Male", {rate: 0.33});
            break;
        case "spanish":
            responsiveVoice.speak(translation, "Spanish Latin American Female");
            break;
        case "gaelic":
            responsiveVoice.speak(translation, "Deutsch Female");
    }
    /* jshint ignore:end */
    
};

const displayDropdownItems = function(languages){
    const dropdownMenu = document.getElementById("language-select");
    languages.forEach(element => {
        let optionsDom = document.createElement('option');
        optionsDom.value = element;
        optionsDom.text = element;
        dropdownMenu.appendChild(optionsDom);
    });
};

module.exports = {displayTranslation, displayDropdownItems};