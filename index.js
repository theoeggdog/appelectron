const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 594,
    height: 420,
    frame: false,           // no window frame (no title bar, buttons)
    transparent: true,      // transparent background so PNG transparency shows
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  win.loadFile('index.html');

  // Uncomment this line if you want developer tools to open automatically
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  // On macOS apps usually stay active until user quits explicitly
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  // macOS: recreate window if none are open on dock icon click
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
