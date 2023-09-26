export type Environments = "develop" | "prod"

export type Themes = "dark" | "light"

export interface AppConfig {
    baseApiUrl: string;
    baseAuthApiUrl: string;
    theme?: Themes;
}

export type IAppConfig = Record<Environments, AppConfig>