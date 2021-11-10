import multer from "multer";
import { fileSize } from "../config/config";
export const upload = multer({
    dest: 'files',
    limits: {
    fileSize: fileSize
    },
    fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(csv|xml)$/)) {
    return cb(new Error('Please upload a file in csv or xml format'))
    }
    cb(null, true)
    }
   })