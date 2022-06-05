import * as fs from 'fs';
import { fileURLToPath } from 'url';
import  path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
    const readStream = fs.createReadStream(fileToReadPath, 'utf8');
    readStream.on('data', (partData) => process.stdout.write(partData)); 
};

read();