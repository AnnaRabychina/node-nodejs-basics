export const parseEnv = () => {
    const args=process.env;
    const filteredByKey = Object.fromEntries(Object.entries(args).filter(([key, value]) => key.startsWith('RSS_'))); 
    for (let [key, value] of Object.entries(filteredByKey)) {
        console.log(`${key}=${value};`);
    }
};

parseEnv();