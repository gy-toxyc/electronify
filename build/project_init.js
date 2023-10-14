import { createFile, execute, createDir } from "./electron_interface.js";
import * as global from './global_values.js';


export function setupProject(controller, path) {
    createFile(global.INIT_SCRIPT, `cd ${path} && npm install electron --save-dev && npm install --save-dev @electron-forge/cli && npx electron-forge import && npm install --save-dev @electron-forge/publisher-github && npm install update-electron-app && exit`);
    execute(`start ${global.INIT_SCRIPT}`);

    createFile(`${path}/index.html`, global.INDEX_CONTENT);
    createFile(`${path}/.gitignore`, global.GITIGNORE_CONTENT);

    createDir(`${path}/electron_base/`);
    createFile(`${path}/electron_base/main.js`, global.MAIN_CONTENT);
    createFile(`${path}/electron_base/preload.js`, global.PRELOAD_CONTENT);

    if(controller === global.ADDON_TYPESCRIPT) {

    }

    if(controller === global.ADDON_BABEL) {
        
    }

    if(controller === global.ADDON_REACT) {
        
    }
}