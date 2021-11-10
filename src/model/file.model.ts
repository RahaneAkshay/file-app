import { Model,  DataTypes } from "sequelize";
import { db } from "../config/config";

export interface FileAttributes {
  
  transaction_id: string;
  amount:string;
  currency_code:string;
  transaction_date:string;
  status:string
  
}

export class Files extends Model<FileAttributes> {}

Files.init({
  
    transaction_id:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    
    },
    amount:{
        type:DataTypes.STRING
    },
    currency_code:{
        type:DataTypes.STRING
        
    },
    transaction_date:{
        type:DataTypes.STRING
    },
    status:{
        type:DataTypes.STRING
    }
},{
      sequelize:db,
      tableName:'files_data',
      timestamps:false
})