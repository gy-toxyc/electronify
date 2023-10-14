/* =======> Operating Systems <======= */
export const OS_WINDOWS            = "WINDOWS"
export const OS_MAC                = "MACOS"
export const OS_LINUX              = "LINUX"



/* =======> Message Box <======= */
export const SUCCESS_STATE         = "SUCCESS";
export const ERROR_STATE           = "ERROR";
export const SUCCESS_COLOR         = "#19df07";
export const ERROR_COLOR           = "#db0000";

export const SUCCESS_MSG           = "Information set succesfully!";
export const ERROR_OS              = "Operating system not recognised.";



/* =======> Add-ons ID <======= */
export const ADDON_TYPESCRIPT      = "TYPESCRIPT";
export const ADDON_BABEL           = "BABEL";
export const ADDON_REACT           = "REACT";



/* =======> Files names <======= */
export const INIT_SCRIPT_BAT           = "init.bat";
export const INIT_SCRIPT_SH            = "init.sh";



/* =======> Files content <======= */
export const INDEX_CONTENT         = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electronify</title>
    <style>
    body {
      background: #0d0d0d;

      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;

      justify-content: center;
      align-content: center;
      align-items: center;

      height: 100vh;
      width: 100vw;

      overflow: hidden;
    }

    #welcome {
      font-family: 'Arial';
      color: #fff;
      font-size: 27px;
      text-align: center;
    }

    #electronify {
      font-family: 'Arial';
      background: linear-gradient(7deg, #0e2fe9, #0e99e9);
      animation: rainbow 2s ease-in-out infinite;
      background-clip: text;
      -webkit-background-clip: text;
      font-size: 32px;
      color: rgb(0,0,0,0);
      display: block;
      text-align: center;
      font-weight: bold;
    }
    </style>
</head>
<body>
    <h1 id="welcome">Thanks for using <span>Electronify</span></h1>
</body>
</html>`;

export const GITIGNORE_CONTENT     = `node_modules 
/out`;

export const MAIN_CONTENT          = `const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})`;

export const PRELOAD_CONTENT        = `const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('databridge', {
    // Here, expose NodeJS functions to the renderers of your app.
})`;