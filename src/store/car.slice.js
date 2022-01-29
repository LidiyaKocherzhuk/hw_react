import {createSlice} from "@reduxjs/toolkit";

const CarSlice= createSlice({
    name: 'carSlice',
    initialState:{
        cars: []
    },
    reducers:{
        addCar:(state,action)=>{
            state.cars.push({id:new Date().getTime(),
                ...action.payload.car})
        },
        deleteCar:(state,action)=>{
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    }
});

const carReducer = CarSlice.reducer;

export const {addCar, deleteCar} = CarSlice.actions;
export default carReducer;

