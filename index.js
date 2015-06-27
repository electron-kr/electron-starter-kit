'use strict';
const app = require('app');
const BrowserWindow = require('browser-window');

// report crashes to the Electron project
require('crash-reporter').start();

// prevent window being GC'd
let mainWindow = null;

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {
  const width = 800;
  const height = 600;
  const is2nd = process.argv.indexOf('--2nd') >= 0;

  var opts = {
    width: width,
    height: height,
    resizable: true
  };

  if (is2nd) {
    setOptsForDualScreen(opts);
  }

  mainWindow = new BrowserWindow(opts);

  // WARN: Inspect window should be opened before loading URL
  mainWindow.inspectElement(0, 0);

  mainWindow.loadUrl(`file://${__dirname}/index.html`);
  mainWindow.on('closed', function () {
    // deref the window
    // for multiple windows store them in an array
    mainWindow = null;
  });
});

function setOptsForDualScreen(opts) {
  var atomScreen = require('screen');
  var displays = atomScreen.getAllDisplays();
  var d2 = displays.length > 1 ? displays[1] : null;
  if (d2) {
    opts.x = d2.bounds.x + (d2.size.width - opts.width) / 2;
    opts.y = d2.bounds.y + (d2.size.height - opts.height) / 2;
  }
}
