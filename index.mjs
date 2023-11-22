import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/userRoute.mjs'
import bodyParser from 'body-parser';

dotenv.config();
const PORT = process.env.PORT || 3500;
const app = express();

app.use(bodyParser.json());
app.use(express.json())

app.use("/",routes); //routes

app.listen(PORT, () =>{
    console.log(`Server on port: ${PORT}`);
})