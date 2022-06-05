import * as fs from 'fs';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import  path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToCompressPath = path.join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = path.join(__dirname, 'files', 'archive.gz')

export const compress = async () => {
    const readStream = fs.createReadStream(fileToCompressPath);
    const writeStream = fs.createWriteStream(archivePath);
    const gzip = zlib.createGzip();
    readStream.pipe(gzip).pipe(writeStream);
};

compress();