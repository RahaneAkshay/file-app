import { Sequelize } from "sequelize";

export const db = new Sequelize(
  'tutorial',
  'root',
  'NEW_USER_PASSWORD',
  {
      dialect:'mysql',
      port:3001
  }
);
export const fileSize:number = 1024;
export const PORT:number = 3000