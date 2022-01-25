import {axiosService} from "./axios.service";
import {baseURL} from "../config/urls";

export const carsService = {
    getAll: () => axiosService.get(baseURL).then(value => value.data),
    // getById: (id)=> axiosService.get(`baseURL/${id}`).then(value => value.data),
    create: (car)=>axiosService.post(baseURL,car).then(value => value.data),
    update: (id,car)=>axiosService.patch(`baseURL/${id}`,car).then(value => value.data),
    deleteCar: (id)=>axiosService.delete(`baseURL/${id}`)
}