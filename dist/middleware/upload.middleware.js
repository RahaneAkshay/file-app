"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const config_1 = require("../config/config");
exports.upload = multer_1.default({
    dest: 'files',
    limits: {
        fileSize: config_1.fileSize
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(csv|xml)$/)) {
            return cb(new Error('Please upload a file in csv or xml format'));
        }
        cb(null, true);
    }
});
