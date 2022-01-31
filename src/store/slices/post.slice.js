import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {placeholderService} from "../../services";
import {getAllUsers} from "./user.slice";


export const getAllPosts = createAsyncThunk(

    'postSlice/getAllPosts',

    async (_,{rejectWithValue}) => {
        try {
            let posts = placeholderService.getPosts();
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
    },

    reducers:{

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

export default postReducer;