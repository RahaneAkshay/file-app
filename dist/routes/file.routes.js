"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const file_controller_1 = require("../controllers/file.controller");
const upload_middleware_1 = require("../middleware/upload.middleware");
exports.router = express_1.Router();
exports.router.post("/", upload_middleware_1.upload.single("upload"), file_controller_1.uploadFile, (error, req, res, next) => {
    res.status(400).send({ error: error.message });
});
exports.router.post("/:id", upload_middleware_1.upload.single("upload"), file_controller_1.uploadFile, (error, req, res, next) => {
    res.status(400).send({ error: error.message });
});
exports.router.get('/', file_controller_1.getFilesData);
