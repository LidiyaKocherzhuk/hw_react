import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {placeholderService} from "../../services";


export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',

    async ({start, limit}, {rejectWithValue}) => {
        try {
            let comments = placeholderService.getComments(start, limit);
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
        error: null,
        start: 0,
        limit: 10,
    },

    reducers:{

        limitsComment:(state,action)=>{
            console.log(action.payload.type)
            if (action.payload.type === 'prev') {
                if (state.start) {
                    state.start -=10;
                }
            }
            if (action.payload.type === 'next'){
                if (state.start === 490) {
                    return;
                }
                state.start +=10;
            }
        }

    },

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
export const {limitsComment} = commentSlice.actions;

export default commentReducer;