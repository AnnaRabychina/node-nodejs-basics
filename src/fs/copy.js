import  * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import  path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const currentFilesPath = path.join(__dirname, 'files');
const copyFilesPath = path.join(__dirname, 'files_copy')

export const copy = async () => {
    try {
        const files = await fs.readdir(currentFilesPath);
        await fs.mkdir(copyFilesPath);
        for (const file of files) {
            await fs.copyFile(`${currentFilesPath}/${file}`, `${copyFilesPath}/${file}`);
        }
      } catch (error) {
        console.error('FS operation failed');
      }
};

copy();