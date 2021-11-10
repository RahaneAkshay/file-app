import fs from "fs";
import convert from 'xml-js'
import xml2js from 'xml2js'
export const getXmlData =(filePath:string)=>{
try{
    const parser = new xml2js.Parser();
    fs.readFile(filePath, function(err, data) {
        parser.parseString(data, function (err:any, result:any) {
            console.log(JSON.stringify (result));
            
        });
    }
}catch(e){
    console.log(e);
}
}

