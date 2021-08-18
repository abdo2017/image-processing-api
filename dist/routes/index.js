"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var images_1 = __importDefault(require("./api/images"));
var routes = express_1.Router();
routes.use("/images/", images_1.default);
routes.get("/", function (req, res) {
    res.send("this is the default api route,please to to /api/images");
});
exports.default = routes;
