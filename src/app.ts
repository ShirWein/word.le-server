import express, { request, response } from 'express';
import crypto from 'crypto'; 
import bodyParser from 'body-parser';
import cors from 'cors';

export const app = express();
const port = 3333;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

let selectedWord: string;

app.get('/game/choose-word', (req, res) => {
   selectedWord = wordBank[Math.floor(Math.random() * wordBank.length-1)];
   const hashString = crypto.createHash('md5').update(selectedWord).digest('hex');
   console.log(hashString);
   res.send(hashString);
 });


app.post('/game/check-guess', (req, res) => {
   console.log(req);
   console.log(req.body);
   const word = req.body.guess;
   const results = selectedWord.split('').map((letter: string, index: number) => {
      if (!selectedWord.includes(word[index])) return null; // gray color
      return selectedWord[index] === word[index]; 
   })
   // send a response
   console.log({selectedWord, word});
    res.send(results);
});

export const wordBank = [
   'lemon',
   'react',
   'dream',
   'kiss',
   'lover',
];


