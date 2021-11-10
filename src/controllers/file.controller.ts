import {  Request, Response } from "express";
const uploadFile = async(req: Request, res: Response):Promise<any>=>{
console.log('file uploaded');
}
const getFilesData = async(req: Request, res: Response):Promise<any>=>{
    res.status(200).send({"msg":"file data retrived "})
    }

export {
    uploadFile,
    getFilesData

}