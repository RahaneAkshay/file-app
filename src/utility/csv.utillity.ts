import fs from "fs";
import csv from "csv-parser";
export const getData = (filePath: string) => {
        try {
            return new Promise((resolve, reject) => {
                    let final_result: any = [];
                    fs.createReadStream(filePath)
                        .pipe(csv())
                        .on("data", (data) => final_result.push(data))
                        .on("end", () => {
                             final_result.pop() 
                            resolve(final_result);
                        })
                }

            }
            catch (e) {
                console.log(e);
            }
        };