import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import  path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fresh.txt');
const content = 'I am fresh and young';

export const create = async () => {
    try {
        await writeFile(filePath, content, { flag: 'wx' });
        console.log(`Created ${filePath}`);
      } catch (error) {
        console.error('FS operation failed');
      }
};

create();