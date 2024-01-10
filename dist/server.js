"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Khai bao port va khoi dong server
const app_1 = __importDefault(require("./app"));
const port = 3000;
const server = app_1.default.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
process.on('SIGINT', () => {
    server.close(() => {
        console.log("Exit server Express");
    });
});
//# sourceMappingURL=server.js.map