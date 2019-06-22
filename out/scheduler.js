'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const reminderView_1 = require("./reminderView");
const utility_1 = require("./utility");
class Scheduler {
    constructor(context) {
        this.context = context;
    }
    start() {
        setInterval(() => {
            reminderView_1.ReminderView.show(this.context);
        }, 1000 * 60 * utility_1.Utility.getConfiguration().get('reminderViewIntervalInMinutes', 60));
    }
}
exports.Scheduler = Scheduler;
//# sourceMappingURL=scheduler.js.map