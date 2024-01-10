"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const app = (0, express_1.default)();
// init middleware
app.use((0, morgan_1.default)('common')); // trang thai code duoc to mau
(0, morgan_1.default)('combine'); // tieu chuan cua apache, full
(0, morgan_1.default)('common');
(0, morgan_1.default)('short');
(0, morgan_1.default)('tiny');
(0, morgan_1.default)('dev');
app.use((0, helmet_1.default)());
// node --watch server.js : su dung cho node > 19
// init db
// inti router
// hanling error
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
//# sourceMappingURL=app.js.map