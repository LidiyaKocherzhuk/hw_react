import {axiosService} from "./axios.service";
import {url} from "../gonfig/urls";

export const carService = {
    getAll: () => axiosService.get(url.cars).then(value => value.data),
    createCar:(car)=> axiosService.post(url.cars, car).then(value => value.data),
    updateCar: (id,car) => axiosService.patch(`${url.cars}/${id}`,car).then(value => value.data),
    deleteCar: (id) => axiosService.delete(`${url.cars}/${id}`),

}