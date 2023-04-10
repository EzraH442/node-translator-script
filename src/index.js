import * as dotenv from 'dotenv';
dotenv.config();

const inFile = './words';
const outFile = './out.yml';

import makeTranslationRequest from "./request.js";
import { createReadStream, appendToFile } from "./readFile.js";

if (process.env.API_KEY === undefined) {
  console.log('create a .env file with your API key first');
  process.exitCode = 1;
} else {
  createReadStream(inFile, (i) => {
    i.on('line', (line) => {
      makeTranslationRequest([line], process.env.API_KEY).then(res => {
        appendToFile(outFile, `${line}: ${(res).join(' ')}\n`, (err) => {
          if (err) { console.log(err) }
        })
      })
    })
  })
}