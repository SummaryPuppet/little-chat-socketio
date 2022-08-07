"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsSocket = exports.PORT = void 0;
exports.PORT = process.env.PORT || 5000;
exports.corsSocket = {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
};
