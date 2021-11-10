"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilesData = exports.uploadFile = void 0;
const uploadFile = async (req, res) => {
    console.log('file uploaded');
};
exports.uploadFile = uploadFile;
const getFilesData = async (req, res) => {
    res.status(200).send({ "msg": "file data retrived " });
};
exports.getFilesData = getFilesData;
