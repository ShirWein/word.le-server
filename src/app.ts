import express, { request, response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export const app = express();
const port = 3333;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/game/choose-word', (req, res) => {
    res.send('lemon');
  });
  
app.post('/guess', (req, res) => {
// Code to handle a guess submission
});

app.get('/game-status/:id', (req, res) => {
// Code to check the status of a game
});


export const wordBank = [];


