"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
var port = 3000;
app.use("/api", routes_1.default);
app.listen(port, function () {
    console.log("http://localhost:3000");
});
app.get("/", function (req, res) {
    res.send("this is the main route,please go to /api/images");
});
exports.default = app;
