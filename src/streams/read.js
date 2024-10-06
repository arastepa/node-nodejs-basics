import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const read = async () => {
    const stream = createReadStream(`${import.meta.dirname}/files/fileToRead.txt`);

    await pipeline(stream, process.stdout, {end: false});

    console.log("\n");

    stream.on('error', (error) => {
      console.error(`Error reading file: ${error.message}`);
    });
};

await read();