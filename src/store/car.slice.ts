import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {carsService} from "../services";
import {ICar} from "../interfaces";

interface ICarState {
    cars: ICar[],
    update: ICar | null,
    a:ICar[]
}

const initialState: ICarState = {
    cars: [],
    update: null,
    a:[],

}

export const getAllCars = createAsyncThunk(
    "carSlice/getAllCars",
    async (_, {dispatch}) => {
        try {
            const {data} = await carsService.getAll()
            dispatch(setCars({car: data}))
        } catch (e) {

        }
    }
);

export const addThunkCar = createAsyncThunk<void, { car: ICar }>(
    "carSlice/addThunkCar",
    async ({car}, {dispatch}) => {
        try {
            carsService.addCar(car)
            dispatch(addCar({car}))
        } catch (e) {

        }
    }
);

export const updateThunkCar = createAsyncThunk<ICar, { car: ICar } >(
    "carSlice/updateThunkCar",
    async ({car}) => {
        try {
            const updateCars = await carsService.updateCar(car, car.id).then(value => value.data);
            return car
        } catch (e) {

        }
    }
);

export const deleteThunkCar = createAsyncThunk<void, { id: number }>(
    "carSlice/deleteCar",
    async ({id}, {dispatch}) => {
        try {
            carsService.deleteCar(id)
            dispatch(deleteCarRedux({id}))
        } catch (e) {

        }
    }
);

// @ts-ignore
const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        setCars: (state, action: PayloadAction<{ car: ICar[] }>) => {
            state.cars = action.payload.car
        },
        addCar: (state, action: PayloadAction<{ car: ICar }>) => {
            state.cars.push(action.payload.car)
        },
        updateCarRedux: (state, action: PayloadAction<{ car: ICar }>) => {
            state.update = action.payload.car
        },
        deleteCarRedux: (state, action: PayloadAction<{ id: number }>) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(updateThunkCar.fulfilled, ((state, action) => {
            state.a = action.payload
        }))
    }



});

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { userAPI } from './userAPI'
//
// // First, create the thunk
// const fetchUserById = createAsyncThunk(
//     'users/fetchByIdStatus',
//     async (userId, thunkAPI) => {
//         const response = await userAPI.fetchById(userId)
//         return response.data
//     }
// )
//
// // Then, handle actions in your reducers:
// const usersSlice = createSlice({
//     name: 'users',
//     initialState: { entities: [], loading: 'idle' },
//     reducers: {
//         // standard reducer logic, with auto-generated action types per reducer
//     },
//     extraReducers: (builder) => {
//         // Add reducers for additional action types here, and handle loading state as needed
//         builder.addCase(fetchUserById.fulfilled, (state, action) => {
//             // Add user to the state array
//             state.entities.push(action.payload)
//         })
//     },
// })
//
// // Later, dispatch the thunk as needed in the app
// dispatch(fetchUserById(123))

type AsyncThunkConfig = {
    /** return type for `thunkApi.getState` */
    state?: unknown
    /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
    extra?: unknown
    /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
    rejectValue?: unknown
    /** return type of the `serializeError` option callback */
    serializedErrorType?: unknown
    /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
    pendingMeta?: unknown
    /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
    fulfilledMeta?: unknown
    /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
    rejectedMeta?: unknown
}

const carReducer = carSlice.reducer;
export const {setCars, addCar, deleteCarRedux, updateCarRedux} = carSlice.actions;

export default carReducer;