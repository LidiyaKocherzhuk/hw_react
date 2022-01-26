import {axiosService, urls} from "./axios.service";

export const apiService = {
    getCharacter: ()=> axiosService.get().then(value => value.data),
    getLocation: ()=> axiosService.get.then(value => value.data),
    getEpisode: ()=> axiosService.get(urls.getEpisode).then(value => value.data)
};

export const urlFromEpisode = {
    getInfo: (url) => axiosService.get(`${url}`).then(value => value.data)
}

export const apiPage = {
   getPage: (numberPage)=> axiosService.get(`https://rickandmortyapi.com/api/episode?page=${numberPage}`)
       .then(value => value.data)

}