import {configureStore} from "@reduxjs/toolkit";
import carReducer from "./car.slice";
import asyncCarReducer from "./async.car.slice";

const store = configureStore({
    reducer:{
        carReducer,
        asyncCarReducer
        }
});

export default store;