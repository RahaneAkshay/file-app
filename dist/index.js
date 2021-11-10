"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const file_routes_1 = require("./routes/file.routes");
const app = express_1.default();
app.use(express_1.default.json());
app.use("/api/files", file_routes_1.router);
(async () => {
    try {
        await config_1.db.sync();
        console.log(`connection sucessfull!!!`);
    }
    catch (e) {
        console.error(e);
    }
})();
app.listen(config_1.PORT, () => {
    console.log(`server up at PORT ${config_1.PORT}`);
});
