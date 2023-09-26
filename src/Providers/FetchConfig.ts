import {IAppConfig} from "../Types";
import axios, {AxiosResponse} from "axios";

export const fetchConfig = async (): Promise<AxiosResponse<IAppConfig>> => {
    const configUrl = `${process.env.PUBLIC_URL}/config.json`
    try {
        return axios.get<IAppConfig>(configUrl)
    } catch (e) {
        throw new Error('Failed to load "config.json". Please make sure there is a config.json file in application public folder.')
    }
}