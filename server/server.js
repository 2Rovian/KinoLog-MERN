import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connect_db.js";
import router from "./routes/routes.index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

connectDB();
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
});