const { app, BrowserWindow } = require("electron");
const path = require("path");

// Register IPC handlers
require("./ipc/workspace");

function createWindow() {
    const win = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 1000,
        minHeight: 700,
        title: "Data Science Studio",

        webPreferences: {
            preload: path.join(__dirname, "preload", "preload.js"),
            contextIsolation: true,
            nodeIntegration: false,
        },
    });

    // Load React App
    win.loadURL("http://localhost:5173");

    // Open Developer Tools (remove this in production)
    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});