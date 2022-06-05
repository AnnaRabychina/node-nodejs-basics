import {fork} from 'child_process'
import { fileURLToPath } from 'url';
import  path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesPath = path.join(__dirname, 'files');
const scriptPath = path.join(__dirname, 'files', 'script.js');

const args = process.argv.slice(2);

export const spawnChildProcess = async () => {
    const child = fork(scriptPath, args);
    child.on('message', (data) => {
        process.stdout.write(`stdout: ${data}`);
    });
};

spawnChildProcess();