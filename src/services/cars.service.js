import {axiosService} from "./axios.service";
import {baseURL} from "../config/urls";

export const carsService = {
    getAll: () => axiosService.get(baseURL).then(value => value.data),
    getById: (id)=> axiosService.get(`baseURL/${id}`).then(value => value.data),
    create: (car)=>axiosService.get(baseURL,car).then(value => value.data),
    update: (id,car)=>axiosService.get(`baseURL/${id}`,car).then(value => value.data),
    delete: (id)=>axiosService.get(`baseURL/${id}`).then(value => value.data),
}