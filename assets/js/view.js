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
        // let optionsDom = document.createElement('option');
        // optionsDom.value = element;
        // optionsDom.text = element;
        // dropdownMenu.appendChild(optionsDom);
        let label = document.createElement('label');
        label.classList = "btn btn-secondary";

        let option = document.createElement('input');
        option.type = "radio";
        option.name = "options";
        option.classList = "radio";
        option.id = element;
        if (element == "spanish") {
            option.setAttribute("checked", "checked");
            label.classList += " active";
        }
        
        dropdownMenu.appendChild(label);
        label.appendChild(option);
        label.innerHTML += ` ${capitalize(element)}`;
    });
};

// reference: https://paulund.co.uk/capitalize-first-letter-string-javascript
const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = {displayTranslation, displayDropdownItems};