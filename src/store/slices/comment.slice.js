import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {placeholderService} from "../../services";


export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',

    async (_, {rejectWithValue}) => {
        try {
            let comments = placeholderService.getComments();
            return comments;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const commentSlice = createSlice({

    name: 'commentSlice',

    initialState: {
        comments: [],
        status: null,
        error: null
    },

    reducers: {},

    extraReducers: {

        [getAllComments.pending]: (state,action) => {
            state.status = 'pending'
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments = action.payload;
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

    }

})

let commentReducer = commentSlice.reducer;

export default commentReducer;