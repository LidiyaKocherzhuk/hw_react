import {Cats, Dogs, Form} from "./components";
import {useReducer} from "react";

import {Reducer} from "./reducer/Reduсer";
import './App.css';

function App() {

    let [{cats, dogs}, dispatch] = useReducer(Reducer, {cats: [], dogs: []});

    return (
        <div>

            <Form dispatch={dispatch}/>

            <div className={'cats-dogs'}>
                <Cats cats={cats} dispatch={dispatch}/>
                <Dogs dogs={dogs} dispatch={dispatch}/>
            </div>

        </div>
    );
}

export default App;
