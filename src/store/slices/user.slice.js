import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {placeholderService} from "../../services";


export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_,{rejectWithValue}) => {
        try {
            let users = placeholderService.getUsers();
            return users;
        }
        catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState:{
        users:[]
    },
    reducers:{

    },
    extraReducers:{
        [getAllUsers.fulfilled]:(state,action)=>{
            state.status = 'fulfilled';
            state.users = action.payload;
        },
        [getAllUsers.rejected]:(state,action)=>{
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

const userReducer = userSlice.reducer;

export default userReducer;