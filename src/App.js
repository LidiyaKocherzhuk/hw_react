import './App.css';
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";
import {useState} from "react";

function App() {

    const [trigger,setTrigger] = useState(null)

    const deleteUpdate = (car)=>{
        setTrigger(car);
    }

    return (
        <div>

            <Form deleteUpdate={deleteUpdate}/>
            <Cars trigger={trigger}/>

        </div>
    );
}

export default App;
