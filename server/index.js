import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT=process.env.PORT||5000;

app.use(express.json());
app.use(cookieParser());

//the args are for the jwt cookie set
app.use(cors({ origin: true, credentials: true }))

//routes
app.use("/todo/api", router);

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
