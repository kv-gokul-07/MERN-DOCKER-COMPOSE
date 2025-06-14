import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/records", records);

app.listen(PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`);
});