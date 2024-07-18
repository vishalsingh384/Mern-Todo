import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/route.js';

dotenv.config();

const app = express();
const PORT=process.env.PORT||5000;

app.use(express.json());

app.use(cors());

//routes
app.use("/api", router);

//start the server
const startServer=()=>{
    try{
        connectDB();
        app.listen(PORT,()=>{
            console.log(`Server started`);
        })
    }catch(err){
        console.log(err.message);
    }
}

startServer();
