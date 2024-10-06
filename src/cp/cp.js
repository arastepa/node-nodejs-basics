import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', [`${import.meta.dirname}/files/script.js`, ...args], {
        stdio: ['pipe', 'pipe', 'pipe']
    });

    process.stdin.pipe(child.stdin);

    child.stdout.pipe(process.stdout);

    child.stderr.on('data', (data) => {
        process.stderr.write(`Error from child: ${data}`);
    });

    child.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`);
    });

};

spawnChildProcess(["werewolves", "vampires"]);
