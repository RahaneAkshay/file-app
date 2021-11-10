"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const fs_1 = __importDefault(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const getData = (filePath) => {
    try {
        return new Promise((resolve, reject) => {
            let final_result = [];
            fs_1.default.createReadStream(filePath)
                .pipe(csv_parser_1.default())
                .on("data", (data) => final_result.push(data))
                .on("end", () => {
                final_result.pop();
                resolve(final_result);
            });
        });
    }
    catch (e) {
        console.log(e);
    }
};
exports.getData = getData;
