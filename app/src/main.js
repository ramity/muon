const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow()
{
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // Keep Electron and renderer separate
            contextIsolation: true,
            // Disable Node.js integration in the renderer for security.
            nodeIntegration: false,
            // Use a preload script to configure bridges.
            preload: path.join(__dirname, "preload.js")
        }
    });

    window.loadFile(path.join(__dirname, '../public/index.html'));

    if (process.env.NODE_ENV === 'development')
    {
        window.webContents.openDevTools();
    }
}

// Create window after electron is initialized
app.on('ready', () => {
    createWindow();
});

// Gracefully handle window-all-closed event
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
    {
        app.quit();
    }
});
