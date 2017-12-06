"use strict";

const translate = require('./translate');
const view = require('./view');

const populateHTML = () => {
    console.log("hello");
};

const activateButton = () => {
    console.log("hello");
};

module.exports.createPage = () => {
    populateHTML();
    activateButton();
};