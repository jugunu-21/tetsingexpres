"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use('/', (req, res) => {
    res.json({ message: 'Welcome to URSTYLE Backend API for uu ' });
});
app.listen('3000', () => {
    console.log("dfcgvhbjnkmememmem");
});
