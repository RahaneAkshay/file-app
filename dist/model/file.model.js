"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Files = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
class Files extends sequelize_1.Model {
}
exports.Files = Files;
Files.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    transaction_id: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    amount: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    currency_code: {
        type: sequelize_1.DataTypes.STRING
    },
    transaction_date: {
        type: sequelize_1.DataTypes.DATE
    },
    status: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    sequelize: config_1.db,
    tableName: 'files_data',
    timestamps: false
});
