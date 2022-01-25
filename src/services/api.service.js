import {AxiosService} from "./axious.service";

export const userService ={
    getAll: () => AxiosService.get('users').then(value => value.data),
    getIdAlbums: (id) => AxiosService.get(`users/${id}/albums`).then(value => value.data),
    getIdPosts: (id) => AxiosService.get(`users/${id}/posts`).then(value => value.data)
}
export const albumService = {
    getId: (id) => AxiosService.get(`albums/${id}/photos`).then(value => value.data)
}
export const postService = {
    getAll: () => AxiosService.get('posts').then(value => value.data),
    getIdComments: (id) => AxiosService.get(`posts/${id}/comments`).then(value => value.data),
};