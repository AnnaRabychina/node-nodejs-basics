import { Transform } from 'stream';

const reverseTransform = () => {
    return new Transform({
        transform(chunk, encoding, callback) {
            const resultTransform = chunk.toString().split('').reverse().join('').trim();
            callback(null, resultTransform);
            process.exit();
        }
    });
}

export const transform = async () => {
    process.stdin.pipe(reverseTransform()).pipe(process.stdout); 
};

transform();