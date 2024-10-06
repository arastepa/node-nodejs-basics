import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async (fileToCompress, outputFile) => {
     const readStream = createReadStream(`${import.meta.dirname}/files/${fileToCompress}`);

     const gzip = createGzip();
 
     const writeStream = createWriteStream(`${import.meta.dirname}/files/${outputFile}`);
 
     readStream
         .pipe(gzip)
         .pipe(writeStream)
         .on('finish', () => {
             console.log(`File compressed successfully to ${outputFile}`);
         })
         .on('error', (err) => {
             console.error('Error during compression:', err);
         });
};

const fileToCompress = 'fileToCompress.txt';
const outputFile = 'archive.gz';
await compress(fileToCompress,outputFile);