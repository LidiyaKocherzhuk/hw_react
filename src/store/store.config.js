import {configureStore} from "@reduxjs/toolkit";
import routineReducer from "./routine.slice";

const storeConfig = configureStore({
    reducer:{
        routineReducer
    }
});

export default storeConfig;