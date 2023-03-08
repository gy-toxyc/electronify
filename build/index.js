import { createFile, readFile } from './electron_interface.js';
import * as validations from './validations.js';

const setupData           = document.getElementById("electron-setup");
const msgBox              = document.querySelector(".msg-box");
const msgText             = document.querySelector(".msg-txt");

const projectSwitch       = document.querySelector(".project-el");
const electronifySwitch   = document.querySelector(".electronify-el");
const aboutUsSwitch       = document.querySelector(".aboutus-el");

const projectPage         = document.querySelector(".setup-page");
const electronifyPage     = document.querySelector(".electronify-page");
const aboutUsPage         = document.querySelector(".aboutus-page");

setupData.addEventListener("submit", (event)=> {
    event.preventDefault();

    try {
        createFile("setup.json", `
            {
                "name": "${validations.validateName(setupData.elements['name-in'].value)}",
                "description": "${validations.validateDesc(setupData.elements['desc-in'].value)}",
                "license": "${validations.validateLicense(setupData.elements['license-in'].value)}",
                "version": "${validations.validateVersion(setupData.elements['version-in'].value)}",
                "author": "${validations.validateAuthor(setupData.elements['author-in'].value)}",
                "test": "${validations.validateTest(setupData.elements['test-in'].value)}",
                "gitRepository": "https://www.github.com/${validations.validateGIT(setupData.elements['git-in'].value)}",
                "path": "${validations.validatePath(setupData.elements['path-in'].value)}",
                "addOns": {
                    "typescript": ${setupData.elements['ts-check'].checked},
                    "babel": ${setupData.elements['babel-check'].checked},
                    "react": ${setupData.elements['react-check'].checked}
                }
            }
        `);
        msgText.style.color = "#19df07";
        msgText.innerHTML = "Information set successfully!";
    } catch(err) {
        msgBox.style.display = "flex";
        msgText.style.color = "#db0000";
        msgText.innerHTML = err;
        setTimeout(()=> {
            // msgBox.style.animation = "disappear";
            msgBox.style.display = "none";
        }, 5000);
    }

    // TODO. Init the project.
});

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