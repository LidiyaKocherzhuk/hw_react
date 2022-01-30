import {createSlice} from "@reduxjs/toolkit";

const asyncCarSlice = createSlice({
    name: 'asyncCarSlice',
    initialState: {
        cars: [],
    },
    reducers: {
        addCar: (state, action)=>{

        },
        updateCar: (state, action)=>{

        },
        deleteCar: (state, action)=>{

        }
    }
})

const asyncCarReducer = asyncCarSlice.reducer;

export const {addCar,deleteCar} = asyncCarSlice.actions;
export default asyncCarReducer;