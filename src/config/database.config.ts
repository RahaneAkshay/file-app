import { Sequelize } from "sequelize";

export const db = new Sequelize(
  'file-app',
  'root',
  'NEW_USER_PASSWORD',
  {
      dialect:'mysql',
      port:3001
  }
);
