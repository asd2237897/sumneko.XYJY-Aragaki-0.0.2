'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const path = require("path");
class ReminderView {
    static show(context) {
        if (this.panel) {
            this.panel.reveal();
        }
        else {
            this.panel = vscode.window.createWebviewPanel("xyjy", "新垣结衣", vscode.ViewColumn.Two, {
                enableScripts: true,
                retainContextWhenHidden: true,
            });
            const imgNum = Math.ceil(Math.random() * 19) 
            const imagePath = vscode.Uri.file(path.join(context.extensionPath, 'images2', 'xyjy' +imgNum + '.gif'))
                .with({ scheme: 'vscode-resource' });
            this.panel.webview.html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新垣结衣</title>
</head>
<body>
    <div><h1>这么长时间了，该停下来休息一下了~~</h1></div>
    <div><img src="${imagePath}"></div>
</body>
</html>`;
            this.panel.onDidDispose(() => {
                this.panel = undefined;
            });
        }
    }
}
exports.ReminderView = ReminderView;
//# sourceMappingURL=reminderView.js.map