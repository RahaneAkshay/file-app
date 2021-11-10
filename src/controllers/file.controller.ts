import { Request, Response } from "express";
import { getFilePath } from "../utility/path.utility";
import { getData } from "../utility/csv.utillity";
import { FileAttributes, Files } from "../model/file.model";
import { getXmlData } from "../utility/xml.utility";
const uploadFile = async (req: Request, res: Response): Promise<any> => {
  let final_result: any = [];
  try {
    const filePath = getFilePath(req.file?.originalname!);
    //result = getXmlData(filePath)
    final_result = await getData(filePath);
    const result = await Files.bulkCreate(final_result);
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};
const getFilesData = async (req: Request, res: Response): Promise<any> => {
  try {
    const result = await Files.findOne({
      where: { transaction_id: req.params.transactionId },
    });
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

export { uploadFile, getFilesData };
