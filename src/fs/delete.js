import { unlink } from 'fs/promises';
import { fileURLToPath } from 'url';
import  path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRemove.txt')

export const remove = async () => {
    try {
        await unlink(filePath);
        console.log(`Successfully deleted ${filePath}`);
      } catch (error) {
        console.error('FS operation failed');
      }
};

remove();