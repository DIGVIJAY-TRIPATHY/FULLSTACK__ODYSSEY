import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js"
import userRoutes from "./routes/user.route.js"
import errorHandling from "./middlewares/errorHandler.middleware.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

//middlewares
app.use(express.json());
app.use(cors());


//routes
app.use('/api', userRoutes)

//error handling
app.use(errorHandling)

createUserTable();


//testing postgre conection
app.get("/", async(req, res) => {
    console.log("start")
    const result = await pool.query("SELECT current_database()")
    console.log("end");
    res.send(`the database name is : ${result.rows[0].current_database}`)
    
})



app.listen(port, () => {
    console.log(`server is running on port ${port}`);
    
})