import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";


export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getAll();
            return cars;
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);


export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car},{dispatch,rejectWithValue})=>{
        try{
            const newCar = await carService.createCar(car);
            dispatch(addCar({car: newCar}));
        }
        catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


export const updateCarAsync = createAsyncThunk(
    'carSlice/updateCarAsync',
    async ({id,car},{dispatch,rejectWithValue})=>{
        try {
            const updatedCar = await carService.updateCar(id,car);
            return updatedCar;
        }
        catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


export const deleteCarAsync = createAsyncThunk(
    'carSlice/deleteCarAsync',
    async ({id}, {dispatch,rejectWithValue})=>{
        try{
            await carService.deleteCar(id);
            dispatch(deleteCar({id}))
        }
        catch (e) {
            return rejectWithValue(e.message);
        }
    }

);


const CarSlice = createSlice({

    name: 'carSlice',
    initialState: {

        cars: [],
        update: '',
        status: null,
        error: null

    },
    reducers: {

        addCar: (state, action) => {
            state.cars.push(action.payload.car);
        },
        updateCar: (state,action) => {
            state.update = action.payload.car
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }

    },
    extraReducers: {

        [getAllCars.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [createCar.rejected]:(state,action)=>{
            state.status = 'rejected';
            state.error = action.payload;
        },
        [updateCarAsync.fulfilled]: (state,action) => {
            state.update = action.payload;
        },
        [updateCarAsync.rejected]:(state,action)=>{
            state.status = 'rejected';
            state.error = action.payload;
        },
        [deleteCarAsync.rejected]:(state,action)=>{
            state.status = 'rejected';
            state.error = action.payload;
        }

    }

});

const carReducer = CarSlice.reducer;

export const {addCar, updateCar, deleteCar} = CarSlice.actions;
export default carReducer;

