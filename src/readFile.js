import fs from 'node:fs'
import readline from 'node:readline'
import events from 'node:events'

// returns output stream
const createReadStream = async (file, callback) => {

  const rl = readline.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity
  });

  callback(rl);

  await events.once(rl, 'close');
}

const appendToFile = async (file, text, err) => {
  fs.appendFile(file, text, err)
}

export { createReadStream, appendToFile }
