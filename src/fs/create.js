import { writeFile } from 'node:fs/promises'

const create = async () => {
    const filename = 'fresh.txt';
    const data = 'I am fresh and young';
    try {
        await writeFile(`${import.meta.dirname}/files/${filename}`, data, {flag: "wx"} )
    }
    catch{
        throw new Error('FS operation failed');
    }
}

await create();