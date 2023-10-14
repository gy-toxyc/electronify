const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('databridge', {
	createDir: (name) => ipcRenderer.send('createDir', name),
	createFile: (name, content) => ipcRenderer.send('createFile', name, content),
    overwriteFile: (name, content) => ipcRenderer.send('overwriteFile', name, content),
    readFile: (name) => ipcRenderer.invoke('readFile', name),
    removeFile: (name) => ipcRenderer.invoke('removeFile', name),
    cmdexec: (cmd) => ipcRenderer.send('execute', cmd),
    getOS: () => ipcRenderer.invoke('opSys'),
})