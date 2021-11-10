"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
exports.upload = multer_1.default({
    storage: storage,
    limits: { fileSize: 102240 },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(csv|xml)$/)) {
            return cb(new Error("Please upload a file in csv or xml format"));
        }
        cb(null, true);
    }
});
