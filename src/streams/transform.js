import { Transform } from 'stream';

const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
          const reversedChunk = chunk.toString().split('').reverse().join('');
          callback(null, reversedChunk + "\n");
        }
      });
      console.log('Please enter some text to reverse:');
      process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();