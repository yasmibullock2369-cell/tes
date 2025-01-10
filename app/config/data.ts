export const APP_CONFIG = {
    CHAT_ID: '7961851821',

    TOKEN: 8086831835:AAGp7bTGis_7WFTrDtIrzZI03_SOt-bUj2w',

    MAX_PASSWORD_ATTEMPTS: 2,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 5
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
