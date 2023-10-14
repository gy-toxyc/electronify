import { createFile, createDir, openURL } from './electron_interface.js';
import { setupProject } from './project_init.js';
import * as validations from './validations.js';
import * as global from './global_values.js';

const setupData           = document.getElementById("electron-setup");
const msgBox              = document.querySelector(".msg-box");
const msgText             = document.querySelector(".msg-txt");

const projectSwitch       = document.querySelector(".project-el");
const electronifySwitch   = document.querySelector(".electronify-el");
const aboutUsSwitch       = document.querySelector(".changelog-el");

const projectPage         = document.querySelector(".setup-page");
const electronifyPage     = document.querySelector(".electronify-page");
const aboutUsPage         = document.querySelector(".changelog-page");

function showMessage(msg, state) {
    msgBox.style.animation = "appear";
    msgBox.style.animationFillMode = "forwards";
    msgBox.style.animationDuration = ".5s";
    if(state === global.SUCCESS_STATE) {
        msgText.style.color = global.SUCCESS_COLOR;
    } else if(state === global.ERROR_STATE) {
        msgText.style.color = global.ERROR_COLOR;
    }
    msgText.innerHTML = msg;

    setTimeout(()=> {
        msgBox.style.animation = "disappear";
        msgBox.style.animationFillMode = "forwards";
        msgBox.style.animationDuration = "1s";
    }, 5000);
}


/* Submit/Create button behaviour */

setupData.addEventListener("submit", (event)=> {
    event.preventDefault();

    try {
        createDir(`${validations.validatePath(setupData.elements['path-in'].value)}`);

        createFile(`${validations.validatePath(setupData.elements['path-in'].value)}/package.json`, `{
    "name": "${validations.validateName(setupData.elements['name-in'].value)}",
    "version": "${validations.validateVersion(setupData.elements['version-in'].value)}",
    "description": "${validations.validateDesc(setupData.elements['desc-in'].value)}",
    "main": "./electron_base/main.js",
    "scripts": {
        "test": "${validations.validateTest(setupData.elements['test-in'].value)}"
    },
    "repository": {
        "type": "git", 
        "url": "git+https://www.github.com/${validations.validateGIT(setupData.elements['git-in'].value)}.git"
    },
    "keywords": [],
    "author": "${validations.validateAuthor(setupData.elements['author-in'].value)}",
    "license": "${validations.validateLicense(setupData.elements['license-in'].value)}",
    "bugs": {
        "url": "https://www.github.com/${validations.validateGIT(setupData.elements['git-in'].value)}/issues"
    },
    "homepage": "https://www.github.com/${validations.validateGIT(setupData.elements['git-in'].value)}#readme"
}`);

        setupProject(undefined, validations.validatePath(setupData.elements['path-in'].value));
        showMessage(global.SUCCESS_MSG, global.SUCCESS_STATE);
        
    } catch(err) {
        showMessage(err, global.ERROR_STATE);
    }
});



/* Switch between pages */

projectSwitch.addEventListener("click", (event)=> {
    projectPage.style.display       = "flex";
    electronifyPage.style.display   = "none";
    aboutUsPage.style.display       = "none";
});

electronifySwitch.addEventListener("click", (event)=> {
    projectPage.style.display       = "none";
    electronifyPage.style.display   = "flex";
    aboutUsPage.style.display       = "none";
});

aboutUsSwitch.addEventListener("click", (event)=> {
    projectPage.style.display       = "none";
    electronifyPage.style.display   = "none";
    aboutUsPage.style.display       = "flex";
});



/* External URLs */

document.querySelector(".x-social").addEventListener("click", () => {
    openURL("https://twitter.com/srtoxyc")
});

document.querySelector(".instagram-social").addEventListener("click", () => {
    openURL("https://www.instagram.com/srtoxyc/")
});

document.querySelector(".github-social").addEventListener("click", () => {
    openURL("https://github.com/srtoxyc")
});

document.querySelector(".html-docs").addEventListener("click", () => {
    openURL("https://developer.mozilla.org/en-US/docs/Web/HTML")
});

document.querySelector(".css-docs").addEventListener("click", () => {
    openURL("https://developer.mozilla.org/en-US/docs/Web/CSS")
});

document.querySelector(".js-docs").addEventListener("click", () => {
    openURL("https://developer.mozilla.org/en-US/docs/Web/JavaScript")
});

document.querySelector(".node-docs").addEventListener("click", () => {
    openURL("https://nodejs.org/en/docs/")
});

document.querySelector(".electron-docs").addEventListener("click", () => {
    openURL("https://www.electronjs.org/docs/latest/")
});