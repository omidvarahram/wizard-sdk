import {IAppConfig} from "./AppConfig";
import {IAppActions} from "./AppActions";

export interface IAppContext {
    config: IAppConfig,
    actions?: IAppActions
}