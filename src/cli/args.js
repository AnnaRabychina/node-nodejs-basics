// node src\cli\args --propName value --propName2 value2

export const parseArgs = () => {
    const args = process.argv.slice(2);
    for (let i = 0; i< args.length; i=i+2) {
        console.log(`${args[i]} is ${args[i+1]};`);
    }
};

parseArgs();