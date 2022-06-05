import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';
import  path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')

const data = await readFile(filePath);

export const calculateHash = async () => {
    try {
        const data = await readFile(filePath);
        const hash = createHash('sha256');
        hash.update(data);
        console.log(hash.digest('hex'));
      } catch (error) {
        console.error(error);
      } 
};

calculateHash();