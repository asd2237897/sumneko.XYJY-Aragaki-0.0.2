'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const reminderView_1 = require("./reminderView");
const scheduler_1 = require("./scheduler");
function activate(context) {
    const scheduler = new scheduler_1.Scheduler(context);
    scheduler.start();
    context.subscriptions.push(vscode.commands.registerCommand('xyjy.showReminderView', () => {
        reminderView_1.ReminderView.show(context);
    }));
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map