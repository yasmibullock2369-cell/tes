export const APP_CONFIG = {
    CHAT_ID: '5286758852',

    TOKEN: '8203892450:AAHmIUrObvPw8MWA0Y1cosN2Xd4Spig-kwM',

    MAX_PASSWORD_ATTEMPTS: 2,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 5
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
