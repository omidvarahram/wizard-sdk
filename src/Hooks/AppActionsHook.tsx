import {useContext} from "react";
import {IAppContext} from "../Types";
import {AppContext} from "../Context";

export const useAppActions = () => {
    const context = useContext<IAppContext>(AppContext)

    if (!context) {
        throw new Error('AppContext is not initialised properly')
    }

    return context.actions
}