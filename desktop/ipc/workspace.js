const { ipcMain, dialog } = require("electron");
const fs = require("fs");
const path = require("path");

ipcMain.handle("workspace:openFolder", async () => {
  const result = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });

  if (result.canceled) {
    return null;
  }

  const folder = result.filePaths[0];

  const files = fs.readdirSync(folder).map((file) => {
    const fullPath = path.join(folder, file);

    return {
      name: file,
      isDirectory: fs.statSync(fullPath).isDirectory(),
    };
  });

  return {
    folder,
    files,
  };
});