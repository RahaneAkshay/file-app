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

export const PORT:number = 3000