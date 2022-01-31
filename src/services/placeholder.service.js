import {urlPlaceholder} from "../config/url.placeholder";
import {axiosServicePlaceholder} from "./axios.service";


export const placeholderService = {
    getUsers:()=>axiosServicePlaceholder.get(urlPlaceholder.users).then(value => value.data),
    getPosts:()=>axiosServicePlaceholder.get(urlPlaceholder.posts).then(value => value.data),
    getComments:()=>axiosServicePlaceholder.get(urlPlaceholder.comments).then(value => value.data),
}