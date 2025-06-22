"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handleErrors_1 = require("./app/middleware/handleErrors");
const book_controller_1 = require("./app/controller/book.controller");
const borrow_controller_1 = require("./app/controller/borrow.controller");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/books', book_controller_1.bookRouters);
app.use('/api/borrow', borrow_controller_1.borrowRoutes);
// Static Files Middleware
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Root Route (serve index.html)
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
app.get('/', (req, res) => {
    res.send("Well Come mongoose  App");
});
app.use(handleErrors_1.globalErrorHandler);
exports.default = app;
