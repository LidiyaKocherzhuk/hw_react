import {useRef} from "react";

import './Form.css'

const Form = ({dispatch}) => {

    let catInput = useRef();
    let dogInput = useRef();

    const submit = (e) => {
        e.preventDefault();
        e.target.reset()
    };

    const saveCat = ()=>{
        dispatch({type:'addCat', payload:catInput.current.value})
    };
    const saveDog = ()=>{
        dispatch({type:'addDog',payload:dogInput.current.value})
    };

    return (
        <div>

            <div className={'forms'}>

                <form onSubmit={submit}>
                    <label>Add Cat: <input type='text' name={'cat'} ref={catInput}/></label>
                    <button onClick={saveCat}>Save</button>
                    <label>Add Dog: <input type="text" name={'dog'} ref={dogInput}/></label>
                    <button onClick={saveDog}>Save</button>
                </form>

            </div>
            <hr/>

        </div>
    );
};

export {Form};