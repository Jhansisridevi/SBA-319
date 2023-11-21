import express from 'express'
import dotenv from 'dotenv'

dotenv.config();
const PORT = process.env.PORT || 3500;
const app = express();

app.use(express.json())

app.listen(PORT, () =>{
    console.log(`Server on port: ${PORT}`);
})