import { Router, Request, Response, NextFunction } from "express";
import { uploadFile,getFilesData} from "../controllers/file.controller";
import { upload } from "../middleware/upload.middleware";

export const router = Router();

router.post(
  "/",
  upload.single("upload"),
  uploadFile,
  (error: any, req: any, res: any, next: NextFunction) => {
    res.status(400).send({ error: error.message });
  }
);

router.get('/',getFilesData)
