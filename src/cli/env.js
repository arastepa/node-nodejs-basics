const parseEnv = () => {
   const rssEnv = Object.keys(process.env).filter(env => env.startsWith('RSS_'));
   const res = rssEnv.map((env, i) => `${env}=${process.env[env]}`).join('; ');
   console.log(res);
};

parseEnv();