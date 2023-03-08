const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('databridge', {
	createFile: (name, content) => ipcRenderer.send('createFile', name, content),
    overwriteFile: (name, content) => ipcRenderer.send('overwriteFile', name, content),
    readFile: (name) => ipcRenderer.invoke('readFile', name),
})