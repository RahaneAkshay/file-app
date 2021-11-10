import { Request, Response } from "express";
import { getFilePath } from "../utility/path.utility";
import { getData } from "../utility/fileData.utillity";
import { FileAttributes ,Files} from "../model/file.model";

const uploadFile = async (req: Request, res: Response): Promise<any> => {
  let final_result:any = [];
  try {
    const filePath = getFilePath(req.file?.originalname!);
    final_result = await getData(filePath);
    console.log(final_result);
    const result = await Files.bulkCreate(final_result);
    console.log(result,'hii');
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};
const getFilesData = async (req: Request, res: Response): Promise<any> => {
  res.status(200).send({ msg: "file data retrived " });
};

export { uploadFile, getFilesData };
