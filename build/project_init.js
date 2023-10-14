import { createFile, execute, createDir, getOS } from "./electron_interface.js";
import * as global from './global_values.js';

function initialize(path, script, content, startScript) {
    createFile(script, content);
    execute(startScript);

    createFile(`${path}/index.html`, global.INDEX_CONTENT);
    createFile(`${path}/.gitignore`, global.GITIGNORE_CONTENT);

    createDir(`${path}/electron_base/`);
    createFile(`${path}/electron_base/main.js`, global.MAIN_CONTENT);
    createFile(`${path}/electron_base/preload.js`, global.PRELOAD_CONTENT);
}


export function setupProject(controller, path) {
    const INIT_CONTENT = `cd ${path} && npm install electron --save-dev && npm install --save-dev @electron-forge/cli && npx electron-forge import && npm install --save-dev @electron-forge/publisher-github && npm install update-electron-app && exit`;

    getOS().then(os => {
        switch(os) {
            case global.OS_WINDOWS:
                initialize(path, global.INIT_SCRIPT_BAT, INIT_CONTENT, `start ${global.INIT_SCRIPT_BAT}`);
                break;
            case global.OS_MAC:
                initialize(path, global.INIT_SCRIPT_SH, INIT_CONTENT, `${global.INIT_SCRIPT_BAT}`);
                break;
            case global.OS_LINUX:
                initialize(path, global.INIT_SCRIPT_SH, INIT_CONTENT, `${global.INIT_SCRIPT_BAT}`);
                break;
            default:
                console.error(global.ERROR_OS);
                break;
        }
        
        // if(controller === global.ADDON_TYPESCRIPT) {
    
        // }
    
        // if(controller === global.ADDON_BABEL) {
            
        // }
    
        // if(controller === global.ADDON_REACT) {
            
        //}
    }).catch(err => console.error(global.ERROR_OS));
}