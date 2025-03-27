import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";





//App Config:
const app=express();
const port=4000

//Middleware:
app.use(express.json());
app.use(cors());

//DB connection:
connectDb();

//api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));


app.get("/",(req,res)=>{
    res.send("Api working");
});

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
});

// mongodb+srv://adarshpathak181210:<db_password>@cluster0.6d19m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

 