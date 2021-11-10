import { Request, Response } from "express";
import { getFilePath } from "../utility/path.utility";
import { getData } from "../utility/csv.utillity";
import { FileAttributes ,Files} from "../model/file.model";
import {getXmlData} from '../utility/xml.utility';
const uploadFile = async (req: Request, res: Response): Promise<any> => {
  let final_result:any = [];
  try {
      let result:any= 'fasfa'
    const filePath = getFilePath(req.file?.originalname!);
    result = getXmlData(filePath)
    //final_result = await getData(filePath);
   // const result = await Files.bulkCreate(final_result);
    console.log(result,'hii');
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};
const getFilesData = async (req: Request, res: Response): Promise<any> => {
  res.status(200).send({ msg: "file data retrived" });
};

export { uploadFile, getFilesData };
