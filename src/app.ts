import express, { request, response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export const app = express();
const port = 3333;

app.use(cors({origin: "http://localhost:3333"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))



app.listen(port, '0.0.0.0', ()=> {
    console.log(`App is running on localhost:${port}`)
  })