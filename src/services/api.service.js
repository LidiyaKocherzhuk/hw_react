import {axiosService, urls} from "./axios.service";

export const apiService = {
    getCharacter: ()=> axiosService.get().then(value => value.data),
    getLocation: ()=> axiosService.get.then(value => value.data),
    getEpisode: ()=> axiosService.get(urls.getEpisode).then(value => value.data)

};