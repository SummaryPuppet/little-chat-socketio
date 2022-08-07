"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer(app);
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.get("/chat", (_req, res) => {
    res.redirect("/");
});
app.use((_req, res, next) => {
    if (res.status(404)) {
        res.redirect("/");
    }
    else {
        next();
    }
});
exports.default = server;
