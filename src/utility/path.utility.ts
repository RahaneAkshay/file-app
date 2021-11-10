import path from "path";

export const  getFilePath = (fileName:string)=>{
return path.join(__dirname,`../uploads/${fileName}`)
}