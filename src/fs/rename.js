import  {rename as renameFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import  path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const currentFile = path.join(__dirname, 'files','wrongFilename.txt');
const newFile = path.join(__dirname, 'files', 'properFilename.md')

export const rename = async () => {
    try {
        await renameFile(currentFile, newFile);
        console.log(`Renamed ${currentFile} to ${newFile}`);
      } catch (error) {
        console.error('FS operation failed');
      }
};

rename();