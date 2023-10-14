/* =======> Message Box <======= */
export const SUCCESS_STATE         = "SUCCESS";
export const ERROR_STATE           = "ERROR";
export const SUCCESS_COLOR         = "#19df07";
export const ERROR_COLOR           = "#db0000";

export const SUCCESS_MSG           = "Information set succesfully!";



/* =======> Add-ons ID <======= */
export const ADDON_TYPESCRIPT      = "TYPESCRIPT";
export const ADDON_BABEL           = "BABEL";
export const ADDON_REACT           = "REACT";



/* =======> Files names <======= */
export const INIT_SCRIPT           = "init.bat";



/* =======> Files content <======= */
export const INDEX_CONTENT         = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electronify</title>
</head>
<body>
    
</body>
</html>`;

export const GITIGNORE_CONTENT     = `node_modules 
/out`;

export const MAIN_CONTENT      = `const { app, BrowserWindow } = require('electron')
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

export const PRELOAD_CONTENT      = `const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('databridge', {
    // Here, expose NodeJS functions to the renderers in your app.
})`;