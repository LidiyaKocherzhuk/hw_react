import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import "./App.css";
import {addRoutine} from "./store/routine.slice";
import {Routines} from "./components/Routines/Routines";

function App() {

    const {counterAll, counterCompleted} = useSelector(state => state['routineReducer']);
    const routineInput = useRef();
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        e.target.reset();
    };

    const save = () => {
        dispatch(addRoutine({value: routineInput.current.value}));
    }

    return (
        <div className={"App"}>

            <h2>All-{counterAll} Complete-{counterCompleted}</h2>
            <form onSubmit={submit}>
                <input type="text" name={'routine'} ref={routineInput}/>
                <button onClick={save}>Save</button>
            </form>

            <hr/>
            <Routines/>

        </div>
    );
}

export default App;
