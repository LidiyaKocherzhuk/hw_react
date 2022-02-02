import {axiosService} from "./axios.service";
import {baseURL, urls} from "../config/urls";

export const apiService = {
    getEpisode:()=>axiosService.get(`https://rickandmortyapi.com/api/episode`).then(value => value.data)
}

export const urlFromEpisode = {
    getInfo: (url) => axiosService.get(`${url}`).then(value => value.data)
}

export const apiPage = {
   getPage: (number)=> axiosService.get(`${urls.episode}?page=${number}`).then(value => value.data)

}