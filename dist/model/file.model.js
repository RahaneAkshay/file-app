"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Files = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
class Files extends sequelize_1.Model {
}
exports.Files = Files;
Files.init({
    transaction_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    amount: {
        type: sequelize_1.DataTypes.STRING
    },
    currency_code: {
        type: sequelize_1.DataTypes.STRING
    },
    transaction_date: {
        type: sequelize_1.DataTypes.STRING
    },
    status: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    sequelize: config_1.db,
    tableName: 'files_data',
    timestamps: false
});
