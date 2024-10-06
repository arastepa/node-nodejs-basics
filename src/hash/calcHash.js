import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const hash = createHash('sha256');
    const stream = createReadStream(`${import.meta.dirname}/files/fileToCalculateHashFor.txt`);
    
    stream.on('data', (chunk) => {
        hash.update(chunk);
    });

    stream.on('end', () => {
        console.log(`SHA256 hash: ${hash.digest('hex')}`);
    });

    stream.on('error', (err) => {
        console.error(`Error reading the file: ${err.message}`);
    });
};

await calculateHash();