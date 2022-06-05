import * as fs from 'fs';
import { fileURLToPath } from 'url';
import  path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToWritePath = path.join(__dirname, 'files', 'fileToWrite.txt');

export const write = async () => {
    const writeStream = fs.createWriteStream(fileToWritePath);
    process.stdin.on('data', (partData) => {
        writeStream.write(partData);
        process.exit();
    });
};

write();