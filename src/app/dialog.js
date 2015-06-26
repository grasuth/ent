var fs = require("fs");
var dialog = require("dialog");
var BrowserWindow = require("browser-window");

module.exports.openFile = function () {
    var fileNames = dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), {
        properties: [ "openFile" ],
        filters: [{ name: "Text Files", extensions: ["txt"] }]
    });

    if (!fileNames) {
        return false;
    }

    var fileName = fileNames[0];

    return fs.readFileSync(fileName, "utf8");
};

module.exports.saveFile = function (text) {
    var fileName = dialog.showSaveDialog(BrowserWindow.getFocusedWindow(), {
        title: "Open tree",
        filters: [{ name: "Text", extensions: ["txt"]}]
    });

    if (!fileName) {
        return false;
    }

    fs.writeFileSync(fileName, text);

    return true;
};
