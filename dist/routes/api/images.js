"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = __importDefault(require("path"));
var isAccessable_1 = __importDefault(require("../../utils/isAccessable"));
var imageProcess_1 = __importDefault(require("../../utils/imageProcess"));
var routes = express_1.Router();
// the endpoint for resizing the image..
routes.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var queryFilename, queryWidth, queryHeight, imagePath, outputImagePath, outputImagePathDir, newImageFullPath, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                queryFilename = req.query.filename;
                queryWidth = parseInt(req.query.width);
                queryHeight = parseInt(req.query.height);
                imagePath = path_1.default.resolve('./', 'assets', 'full', queryFilename + '.jpg');
                outputImagePath = path_1.default.resolve('./', 'assets', 'thumb', queryFilename + queryWidth + '-' + queryHeight + '.jpg');
                outputImagePathDir = path_1.default.resolve('./', 'assets', 'thumb');
                newImageFullPath = outputImagePathDir +
                    queryFilename +
                    queryWidth +
                    '-' +
                    queryHeight +
                    '.jpg';
                return [4 /*yield*/, isAccessable_1.default(newImageFullPath)];
            case 1:
                // check if the picture has resized before and return it
                if (_a.sent()) {
                    res.status(200).sendFile(newImageFullPath);
                }
                return [4 /*yield*/, imageProcess_1.default(queryFilename, queryWidth, queryHeight)];
            case 2:
                result = _a.sent();
                if (result) {
                    res.send(result);
                }
                res.status(200).sendFile(outputImagePath);
                return [2 /*return*/];
        }
    });
}); });
exports.default = routes;
