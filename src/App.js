import './App.css';
import {Cats, Dogs, Form} from "./components";
import {useReducer} from "react";
import {Reducer} from "./reducer/Reduсer";

function App() {

    let [{cats,dogs}, dispatch] = useReducer(Reducer, {cats: [], dogs: []});

    return (
        <div>
            <Form dispatch={dispatch}/>
            <Cats cats={cats}/>
            <Dogs dogs={dogs}/>
        </div>
    );
}

export default App;
