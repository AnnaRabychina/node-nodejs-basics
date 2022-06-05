// for test bash: RSS_name1=value1 RSS_name2=value2 node src/cli/env
// for test powershell: $env:RSS_name1="value1"; $env:RSS_name2="value2"; node src/cli/env

export const parseEnv = () => {
    const args=process.env;
    const filteredByKey = Object.fromEntries(Object.entries(args).filter(([key, value]) => key.startsWith('RSS_'))); 
    for (let [key, value] of Object.entries(filteredByKey)) {
        console.log(`${key}=${value};`);
    }
};

parseEnv();