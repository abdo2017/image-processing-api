"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
describe("doing index.ts tests", function () {
    it("should print something  ", function () {
        expect(index_1.default("abdo")).toEqual("hello world abdo");
    });
});
