import express, { request, response } from 'express';
import crypto from 'crypto'; 
import bodyParser from 'body-parser';
import cors from 'cors';

export const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

let selectedWord: string;

app.get('/game/choose-word', (req, res) => {
   selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
   console.log('selected Word',selectedWord);
   const hashString = crypto.createHash('md5').update(selectedWord).digest('hex');
   console.log(hashString);
   res.json(hashString);
 });


app.post('/game/check-guess', (req, res) => {
   const word = req.body.key;
   console.log('word;', word);
   const results = selectedWord.split('').map((letter: string, index: number) => {
      if (!selectedWord.includes(word[index])) return null; // gray color 
      return selectedWord[index] === word[index]; // true - green color, false - yellow
   })
    res.json(results);
});

export const wordBank = [
   'lemon',
   'react',
   'dream',
   'hello',
   'shine',
];


