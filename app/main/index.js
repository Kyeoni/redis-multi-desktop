/*
 * @Description: 主进程
 * @Author: Kyeoni hujr
 * @Date: 2021-12-14 14:14:58
 * @LastEditors: Kyeoni hujr
 * @LastEditTime: 2022-08-15 10:34:58
 */

const { app, BrowserWindow } = require('electron')
const { create: createHomeWindow } = require('./windows/home')
const ipc = require('./ipc')
app.whenReady().then(res => {
  console.log('is Ready')
  createHomeWindow()
  ipc()
})