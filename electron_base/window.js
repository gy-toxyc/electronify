const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow(filePath) {
	const win = new BrowserWindow({
		width: 1280,
		height: 800,
		fullscreen: false,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		},
		titleBarOverlay: true,
        icon: './img/electronify.png',
	})
	ipcMain.on('createFile', (event, name, content) => {
        fs.writeFile(name, content, function(err) {
            if(err) throw err;
            console.log("File has been created successfully.");
        });
    })
    ipcMain.on('overwriteFile', (event, name, content) => {
        fs.writeFile(name, content, function(err) {
            if(err) throw err;
            console.log("File has been overwritten successfully.");
        });
    })
    ipcMain.handle('readFile', (event, name) => {
        let fileReturned = fs.readFileSync(name, "utf8");
        return fileReturned;
    });
	win.loadFile(filePath);
	win.setMenuBarVisibility(false);
}



app.whenReady().then(() => {
	if(require('electron-squirrel-startup')) {
        app.quit();
    }
	createWindow('index.html');

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow('index.html');
		}
	})
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
})
