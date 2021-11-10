"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getXmlData = void 0;
const fs_1 = __importDefault(require("fs"));
const xml2js_1 = __importDefault(require("xml2js"));
const getXmlData = (filePath) => {
    try {
        const parser = new xml2js_1.default.Parser();
        fs_1.default.readFile(filePath, function (err, data) {
            parser.parseString(data, function (err, result) {
                console.log(JSON.stringify(result));
            });
        });
    }
    catch (e) {
        console.log(e);
    }
};
exports.getXmlData = getXmlData;
