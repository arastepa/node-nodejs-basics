import { rm } from 'node:fs/promises'

const remove = async () => {
    try {
        await rm(`${import.meta.dirname}/files/fileToRemove.txt`); 
    }
    catch {
        throw new Error('FS operation failed')
    }
};

await remove();