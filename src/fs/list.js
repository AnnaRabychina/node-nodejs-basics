import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import  path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filesPath = path.join(__dirname, 'files')

export const list = async () => {
    try {
        const files = await readdir(filesPath);
        for (const file of files) console.log(file);
      } catch (err) {
        console.error('FS operation failed');
      }
};

list();