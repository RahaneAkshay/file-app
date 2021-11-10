import express from "express";
import { db, PORT } from "./config/config";
import { router } from "./routes/file.routes";

const app = express();
app.use(express.json());
app.use("/api/files", router);

(async () => {
  try {
    await db.sync();
    console.log(`connection sucessfull!!!`);
  } catch (e) {
    console.error(e);
  }
})();

app.listen(PORT, () => {
  console.log(`server up at PORT ${PORT}`);
});
