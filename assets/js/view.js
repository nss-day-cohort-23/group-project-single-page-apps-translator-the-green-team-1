"use strict";


// display and speak translated text
const displayTranslation = (translation, language) => {
    const translatedTextOutputBox = document.getElementById("output-text");
    translatedTextOutputBox.innerHTML = translation;
    speakTranslation(translation, language);
};

// speak translated text
const speakTranslation = (translation, language) => {

// function that outputs the translated text to the dom after it has been translated/
// first it gets the 
// populate the dropdown menu with the available laguanges
    const speedSlider = document.getElementById("speedRange");

    let voiceSpeed = speedSlider.value / 100;

    /* ResponsiveVoice used under Non-Commercial License https://responsivevoice.org/ */
    /* jshint ignore:start */
    switch(language) {
        case "zulu":
            console.log("here");
            responsiveVoice.speak(translation, "Swahili Male", {rate: voiceSpeed});
            break;
        case "spanish":
            responsiveVoice.speak(translation, "Spanish Latin American Female", {rate: voiceSpeed});
            break;
        case "gaelic":
            responsiveVoice.speak(translation, "Deutsch Female", {rate: voiceSpeed});
            break;
        case "welsh":
            responsiveVoice.speak(translation, "Deutsch Female", {rate: voiceSpeed});
            break;
    }
    /* jshint ignore:end */
};

// populate dropdown menu with available laguanges
const displayDropdownItems = languages => {
    const dropdownMenu = document.getElementById("language-select");
    languages.forEach(element => {
        let label = document.createElement('label');
        label.classList = "btn btn-secondary";
        
        let option = document.createElement('input');
        option.type = "radio";
        option.name = "options";
        option.classList = "radio";
        option.id = element;
        if (element == "spanish") {
            option.setAttribute("checked", "checked");
        }
        
        dropdownMenu.appendChild(label);
        label.appendChild(option);
        label.innerHTML += ` ${capitalize(element)}`;
    });
};

// reference: https://paulund.co.uk/capitalize-first-letter-string-javascript
const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = {displayTranslation, displayDropdownItems};