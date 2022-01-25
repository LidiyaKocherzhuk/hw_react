import React, {useState} from 'react';

const Form = ({filterUsers}) => {

    const [form, setForm] = useState({name:'',username:'',email:''})

    const Handler = (e) => {
        e.preventDefault()
        setForm({...form,[e.target.name]:e.target.value})
    };
    const send = (e) => {
        e.preventDefault()
        filterUsers(form)
    }

    return (
        <div>

            <form>
                <label>Name: <input type="text" name={'name'} value={form.value} onChange={Handler}/></label>
                <label>Username: <input type="text" name={'username'} value={form.value} onChange={Handler}/></label>
                <label>Email: <input type="text" name={'email'} value={form.value} onChange={Handler}/></label>
                <button onClick={send}>Find</button>
            </form>

        </div>
    );
};

export default Form;