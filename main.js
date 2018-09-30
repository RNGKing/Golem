const {app,BrowserWindow} = require('electron')
const url = require('url');
const path = require('path');
let win

function createWindow(){
    win = new BrowserWindow({
        width:1300, 
        height: 900,
        useContentSize: true,
        webPreferences:{
            webgl: true
        }
    })
    win.loadFile ('./app/index.html')
    win.webContents.openDevTools()
    win.on('closed', ()=>{
        win=null
    }) 
}

app.on('ready', createWindow)

app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', ()=>{
    if(win===null){
        createWindow()
    }
})