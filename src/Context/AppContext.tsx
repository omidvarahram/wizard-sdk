import {createContext, useEffect, useState} from "react";
import {AppConfig, IAppActions, IAppConfig, IAppContext} from "../Types";
import {fetchConfig} from "../Providers";

const defaultConfigValues: IAppConfig = {
    develop: {
        baseApiUrl: "",
        baseAuthApiUrl: ""
    },
    prod: {
        baseApiUrl: "",
        baseAuthApiUrl: ""
    }
}

const defaultContext: IAppContext = {
    config: defaultConfigValues,
    actions: {}
}

export const AppContext = createContext<IAppContext>(defaultContext);

export const AppContextProvider = ({children}) => {
    const [config, updateConfigState] = useState<IAppConfig>(defaultConfigValues)

    useEffect(() => {
        fetchConfig()
            .then((response) => {
                if (response && response.data) {
                    updateConfigState(response.data)
                }
            })
            .catch(error => console.error(error))
    })

    const updateConfig = (newConfig: Partial<IAppConfig>): IAppConfig => {
        const updatedConfig = {
            ...config,
            ...newConfig
        }

        updateConfigState(updatedConfig);
        return updatedConfig
    }

    const getConfig = (): IAppConfig => {
        return config
    }

    const actions: IAppActions = {
        getConfig,
        updateConfig
    }

    return (
        <AppContext.Provider value={{config, actions}}>
            {children}
        </AppContext.Provider>
    )
}