"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const day = new Date();
const date = `${day.getDay()}-${day.getMonth() + 1}-${day.getFullYear()}`;
const hourMinutes = `${day.getHours()}:${day.getMinutes()}`;
const dayString = date + " " + hourMinutes;
exports.default = dayString;
