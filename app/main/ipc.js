const { ipcMain } = require("electron")
const { 
  create: createNewConnectionSettingWindow, 
  close: closeNewConnectionSettingWindow 
} = require('./windows/new-connection-setting.js')

module.exports = function () {
  ipcMain.on('create-connection-window', () => {
    createNewConnectionSettingWindow()
  })
  ipcMain.on('close-connection-window', () => {
    closeNewConnectionSettingWindow()
  })
}