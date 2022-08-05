"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverL = void 0;
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
require("./socket-io");
exports.serverL = app_1.default.listen(config_1.PORT, () => {
    console.log(`Server on port: ${config_1.PORT}`);
});
