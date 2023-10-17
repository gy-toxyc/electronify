const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const os = require('os');
const { exec } = require('child_process');



function createWindow(filePath) {
	const win = new BrowserWindow({
		width: 1280,
		height: 800,
		fullscreen: false,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		},
		titleBarOverlay: true,
		icon: path.join(__dirname, "icon.ico"),
	})
	ipcMain.handle('open-url', (event, url) => {
		require('electron').shell.openExternal(url);
        return "Transaction completed.";
	})
	ipcMain.on('execute', (event, cmd) => {
		exec(cmd, (err, stdout, stderr) => {
			if (err) {
				console.error(`Error: ${err.message}`);
			}
			if (stderr) {
				console.error(`STDError: ${stderr}`);
			}

			console.log(`STDout: ${stdout}`);
		});
	})
	ipcMain.on('createDir', (event, name) => {
		fs.mkdir(name, { recursive: true }, (err) => {
			if (err) throw err;
			console.log("Directory has been created successfully.");
		});
	})
	ipcMain.on('createFile', (event, name, content) => {
		fs.writeFile(name, content, function (err) {
			if (err) throw err;
			console.log("File has been created successfully.");
		});
	})
	ipcMain.on('overwriteFile', (event, name, content) => {
		fs.writeFile(name, content, function (err) {
			if (err) throw err;
			console.log("File has been overwritten successfully.");
		});
	})
	ipcMain.handle('readFile', (event, name) => {
		let fileReturned = fs.readFileSync(name, "utf8");
		return fileReturned;
	});
	ipcMain.handle('removeFile', (event, name) => {
		fs.stat(name, function (err, stats) {
			if (err) {
				return console.error(err);
			}

			fs.unlink(name, function (err) {
				if (err) return console.log(err);
				console.log('File deleted successfully!');
			});
		});
	});
	ipcMain.handle('opSys', (event) => {
		return os.platform();
	})
	
	win.loadFile(filePath);
	win.setMenuBarVisibility(false);
}



app.whenReady().then(() => {
	if (require('electron-squirrel-startup')) {
		app.quit();
	}

	createWindow('index.html', os.platform());

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
