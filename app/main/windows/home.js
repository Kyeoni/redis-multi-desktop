/*
 * @Description: 主窗口
 * @Author: Kyeoni hujr
 * @Date: 2022-08-15 09:49:46
 * @LastEditors: Kyeoni hujr
 * @LastEditTime: 2022-08-15 10:07:18
 */

const { BrowserWindow } = require('electron');
let win

function create () {
  win = new BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadURL('http://localhost:5173/')
}

function send (channel, ...args) {
  win.webContents.send(channel, ...args)
}

module.exports = {
  create,
  send
}