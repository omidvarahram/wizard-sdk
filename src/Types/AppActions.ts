import {IAppConfig} from "./AppConfig";

export interface IAppActions {
    updateConfig?: (newConfig: Partial<IAppConfig>) => IAppConfig,
    getConfig?: () => IAppConfig,
}