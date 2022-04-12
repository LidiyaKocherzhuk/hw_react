import {axiosService} from "./axios.service";
import {url} from "../config/urls";
import {ICar} from "../interfaces";

export const carsService = {
    getAll:() => axiosService.get<ICar[]>(url.cars),
    addCar:(car:ICar) => axiosService.put<{ car: ICar }>(url.cars,car),
    updateCar: (car:ICar, id:number) => axiosService.patch(`${url.cars}/${id}`,car),
    deleteCar:(id:number) => axiosService.delete<ICar>(`${url.cars}/${id}`)
}