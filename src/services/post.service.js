import axios from "axios";

let instanseAxios = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'})

const getPosts = (id) => instanseAxios.get(`/users/${id}/posts`)

export const postService = {
    getPosts
}