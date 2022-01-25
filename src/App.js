import './App.css';
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";
import {useState} from "react";

function App() {

    const [trigger,setTrigger] = useState(null)
    const [carForUpdate,setCarForUpdate] = useState({})

    console.log(trigger)
    return (
        <div>

            <Form update={setTrigger} carForUpdate={carForUpdate}/>
            <Cars trigger={trigger} update={setTrigger} setCarForUpdate={setCarForUpdate}/>

        </div>
    );
}

export default App;
