import  {rename as moveFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import  path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const currentFilesPath = path.join(__dirname, 'files');
const newFilesPath = path.join(__dirname, 'files_copy')

export const copy = async () => {
    try {
        await moveFile(currentFilesPath, newFilesPath);
        console.log(`Moved files from ${currentFilesPath} to ${newFilesPath}`);
      } catch (error) {
        console.error('FS operation failed');
      }
};

copy();