"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class Utility {
    static getConfiguration() {
        return vscode.workspace.getConfiguration("xyjy");
    }
}
exports.Utility = Utility;
//# sourceMappingURL=utility.js.map