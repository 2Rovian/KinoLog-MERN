import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connect_db.js";
import router from "./routes/routes.index.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors"

dotenv.config();
const app = express();
const PORT = process.env.PORT;

connectDB();

// Middlewares
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(cookieParser());                
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());                
app.use(router);                        
//

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
});