import './App.css';
import {Form} from "./components/Form/Form";
import {useReducer} from "react";

function App() {

    // let [state, dispatch] = useReducer(reducer, {cets: [], dogs: []});

    return (
        <div>
            <Form/>
        </div>
    );
}

export default App;
