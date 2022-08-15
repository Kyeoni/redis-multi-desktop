/*
 * @Description: 设置连接的窗口
 * @Author: Kyeoni hujr
 * @Date: 2022-08-15 09:49:46
 * @LastEditors: Kyeoni hujr
 * @LastEditTime: 2022-08-15 14:21:01
 */

const { BrowserWindow } = require('electron');
let win

function create () {
  win = new BrowserWindow({
    width: 800,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadURL('http://localhost:5173/#/new-connection-setting')
}

function close () {
  win.close()
}

function send (channel, ...args) {
  win.webContents.send(channel, ...args)
}

module.exports = {
  create,
  close,
  send
}