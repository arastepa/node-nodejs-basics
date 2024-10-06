import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const decompress = async (inputFile, outputFile) => {
    const readStream = createReadStream(`${import.meta.dirname}/files/${inputFile}`);

    const gunzip = createGunzip();

    const writeStream = createWriteStream(`${import.meta.dirname}/files/${outputFile}`);

    readStream
        .pipe(gunzip)
        .pipe(writeStream)
        .on('finish', () => {
            console.log(`File decompressed successfully to ${outputFile}`);
        })
        .on('error', (err) => {
            console.error('Error during compression:', err);
        });
};

const outputFile = 'fileToComprress.txt';
const inputFile = 'archive.gz';
await decompress(inputFile, outputFile);