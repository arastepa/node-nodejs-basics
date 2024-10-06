import { readdir } from 'node:fs/promises'

const list = async () => {
    try {
         const data = await readdir(`${import.meta.dirname}/files`);
         console.log(data);
    }
    catch {
        throw new Error('FS operation failed')
    }
};

await list();