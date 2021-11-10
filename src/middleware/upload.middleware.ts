import multer from "multer";
import { fileSize } from "../config/config";
import path from "path";
import { NextFunction } from "express";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
export const upload = multer({
  storage: storage,
  limits: { fileSize: 102240 },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(csv|xml)$/)) {
      return cb(new Error("Please upload a file in csv or xml format"));
    }
    cb(null, true);
  }
});
