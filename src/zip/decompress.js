import * as fs from 'fs';
import * as zlib from 'zlib';
import { fileURLToPath } from 'url';
import  path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToDecompressPath = path.join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = path.join(__dirname, 'files', 'archive.gz');

export const decompress = async () => {
    const readStream = fs.createReadStream(archivePath);
    const writeStream = fs.createWriteStream(fileToDecompressPath);
    const gunzip = zlib.createGunzip();
    readStream.pipe(gunzip).pipe(writeStream);
};

decompress();
