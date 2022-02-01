import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {placeholderService} from "../../services";


export const getAllPosts = createAsyncThunk(

    'postSlice/getAllPosts',

    async ({start,limit},{rejectWithValue}) => {
        try {
            let posts = placeholderService.getPosts(start,limit);
            console.log(start, limit)
            return posts;
        }
        catch (e){
            return rejectWithValue(e.message);
        }
    }
);

const postSlice = createSlice({

    name: 'postSlice',

    initialState:{
        posts: [],
        status: null,
        error: null,
        start: 0,
        limit: 10,
    },

    reducers:{
        limits:(state,action)=>{
            if (action.payload.type === 'prev') {
                if (state.start) {
                    state.start -=10;
                }
            }
            if (action.payload.type === 'next'){
                if (state.limit === 90) {
                    return;
                }
                    state.start +=10;
            }
        }
    },

    extraReducers:{

        [getAllPosts.pending]: (state, action) => {
            state.status = 'pending';
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = "fulfilled";
            state.posts = action.payload;
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        }

    }
});

let postReducer = postSlice.reducer;
export const {limits} = postSlice.actions;

export default postReducer;