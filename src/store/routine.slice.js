import {createSlice} from "@reduxjs/toolkit";

const routineSlice = createSlice({
    name: 'routineSlice',
    initialState: {
        routines: [],
        counterAll: 0,
        counterCompleted: 0
    },
    reducers: {

        addRoutine: (state, action) => {

            state.routines.push({
                id: new Date().getTime(),
                ...action.payload,
                status: false
            });
              state.counterAll++;
        },

        checkRoutine: (state, action) => {

            const checked = state.routines.find(routine => routine.id === action.payload.id)
            Object.assign(checked, {status: !checked.status});

            if (action.payload.checked) {
                state.counterCompleted++;
            }
            if (!action.payload.checked) {
            state.counterCompleted--;
            }

        },

        deleteRoutine: (state, action) => {

            state.routines = state.routines.filter(value => value.id !== action.payload.id);
            state.counterAll--;
            state.counterCompleted--;
        }

    }
});

const routineReducer = routineSlice.reducer;
export const {addRoutine, deleteRoutine, checkRoutine} = routineSlice.actions;

export default routineReducer;