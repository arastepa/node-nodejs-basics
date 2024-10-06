import {readFile} from 'node:fs/promises'

const read = async () => {
    try {
        const data = await readFile(`${import.meta.dirname}/files/fileToRead.txt`, {encoding: 'utf8'});
        console.log(data);
    }
    catch{
        throw new Error('FS operation failed')
    }
};

await read();