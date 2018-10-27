const config = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET || 'superSecret',
    API_BASE: process.env.API_BASE || '/',
    LOGGER: {
        LEVEL: process.env.LOG_LEVEL || 'debug',
        SILENT: process.env.LOG_SILENT || false
    },
    TOKEN: process.env.TOKEN || 'token',
    RTOKEN: process.env.RTOKEN || 'rt',
    DB: {
        ACCOUNT: process.env.DB_ACCOUNT || 'account',
        PASSWORD: process.env.DB_PASSWORD || 'password'
    },
    SPOTIFY_CLIENT_ID: process.env.CLIENT_ID || 'N/A',
    SPOTIFY_CLIENT_SECRET: process.env.CLIENT_SECRET || 'N/A',
    CACHE_TIME_MS: process.env.CACHE_TIME_MS || 10000,
    CachedSession: { time: 0, data: {}}
};

export { config as defaultConfig };
