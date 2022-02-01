import {urlPlaceholder} from "../config/url.placeholder";
import {axiosServicePlaceholder} from "./axios.service";


export const placeholderService = {
    getUsers:()=>axiosServicePlaceholder.get(urlPlaceholder.users).then(value => value.data),

    getPosts:(start,limit)=>axiosServicePlaceholder
        .get(`${urlPlaceholder.posts}?_start=${start}&_limit=${limit}`).then(value => value.data),

    getComments:(start,limit)=>axiosServicePlaceholder
        .get(`${urlPlaceholder.comments}?_start=${start}&_limit=${limit}`).then(value => value.data),
}