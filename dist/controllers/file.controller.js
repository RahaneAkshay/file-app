"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilesData = exports.uploadFile = void 0;
const path_utility_1 = require("../utility/path.utility");
const csv_utillity_1 = require("../utility/csv.utillity");
const file_model_1 = require("../model/file.model");
const uploadFile = async (req, res) => {
    let final_result = [];
    try {
        const filePath = path_utility_1.getFilePath(req.file?.originalname);
        //result = getXmlData(filePath)
        final_result = await csv_utillity_1.getData(filePath);
        const result = await file_model_1.Files.bulkCreate(final_result);
        res.status(200).send(result);
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.uploadFile = uploadFile;
const getFilesData = async (req, res) => {
    try {
        const result = await file_model_1.Files.findOne({
            where: { transaction_id: req.params.transactionId },
        });
        res.status(200).send(result);
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.getFilesData = getFilesData;
