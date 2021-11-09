import { Model,  DataTypes } from "sequelize";
import { db } from "../config/config";

interface FileAttributes {
  id: number;
  transaction_id: string;
  amount:number;
  currency_code:string;
  transaction_date:Date;
  status:string
  
}

export class Files extends Model<FileAttributes> {}

Files.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },

    transaction_id:{
        type:DataTypes.STRING(50),
        allowNull:false,
    
    },
    amount:{
        type:DataTypes.DECIMAL
    },
    currency_code:{
        type:DataTypes.STRING
        
    },
    transaction_date:{
        type:DataTypes.DATE
    },
    status:{
        type:DataTypes.STRING
    }
},{
      sequelize:db,
      tableName:'files_data',
      timestamps:false
})