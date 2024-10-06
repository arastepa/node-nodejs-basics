import { createWriteStream } from 'fs';

const write = async () => {
    const filePath = `${import.meta.dirname}/files/fileToWrite.txt`;
    const writableStream = createWriteStream(filePath, 'utf8');

    console.log('Please enter some data to write to fileToWrite.txt:');
  
    process.stdin.pipe(writableStream);
  
    writableStream.on('finish', () => {
      console.log('Data has been written to fileToWrite.txt');
    });
  
    writableStream.on('error', (error) => {
      console.error(`Error writing to file: ${error.message}`);
    });
};

await write();