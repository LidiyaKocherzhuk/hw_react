import axios, {AxiosResponse} from "axios";

import {ISpaceX} from "../interface/spaceX.inteface";


export const spaceXService = {
    getAll: (): Promise<AxiosResponse<ISpaceX[]>> => axios
        .get('https://api.spacexdata.com/v3/launches?limit=5')
}