import  { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import  path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRead.txt')

export const read = async () => {
    try {
        const data = await readFile(filePath);
        console.log(data.toString());
      } catch (error) {
        console.error('FS operation failed');
      }
};

read();