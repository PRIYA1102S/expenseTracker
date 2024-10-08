//password: yt6hgWsfPOeu4WtJ  username: priya11
//mongodb+srv://priya11:yt6hgWsfPOeu4WtJ@personalfinancetracker.ibzmp.mongodb.net/


import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string =
    "mongodb+srv://priya11:yt6hgWsfPOeu4WtJ@personalfinancetracker.ibzmp.mongodb.net/";

mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});