const parseArgs = () => {
    const args = process.argv.map((arg, i) => {
        if (arg.startsWith('--'))
            return (`${arg.replace('--', '')} is ${process.argv[i + 1]}`)
    });
    const res = args.filter(arg => arg !== undefined).join(', ');
    console.log(res);
};

parseArgs();