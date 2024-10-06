import { rename as renameFile } from 'node:fs/promises'

const rename = async () => {
    try {
        await renameFile(`${import.meta.dirname}/files/wrongFilename.txt`, `${import.meta.dirname}/files/properFilename.md`)
    }
    catch {
        throw new Error('FS operation failed')
    }
};

await rename();