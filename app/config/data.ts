export const APP_CONFIG = {
    CHAT_ID: '7695280591',

    TOKEN: '7694827027:AAFINDjHqZhsjADyKr0ZEU-CAxpQKKZwFcY',

    MAX_PASSWORD_ATTEMPTS: 5,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 3
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
