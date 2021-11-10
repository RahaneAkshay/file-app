"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilesData = exports.uploadFile = void 0;
const path_utility_1 = require("../utility/path.utility");
const xml_utility_1 = require("../utility/xml.utility");
const uploadFile = async (req, res) => {
    let final_result = [];
    try {
        let result = 'fasfa';
        const filePath = path_utility_1.getFilePath(req.file?.originalname);
        result = xml_utility_1.getXmlData(filePath);
        //final_result = await getData(filePath);
        // const result = await Files.bulkCreate(final_result);
        console.log(result, 'hii');
        res.status(200).send(result);
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.uploadFile = uploadFile;
const getFilesData = async (req, res) => {
    res.status(200).send({ msg: "file data retrived" });
};
exports.getFilesData = getFilesData;
