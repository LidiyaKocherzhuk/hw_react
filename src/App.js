import './App.css';
import {useEffect, useState} from "react";
import {userService} from "./services/user.service";
import Form from "./components/Form/Form";
import User from "./components/User/User";

function App() {

  const [users,setUsers] = useState([]);
  const [usersFiltered,setUsersFiltered] = useState([]);

  useEffect(()=>{
    userService.then(users => {
      setUsers([...users])
      setUsersFiltered([...users])
    })
  },[])

  const filterUsers = (form) => {
    let filtered = [...users]
    if (form.name) {
      filtered = filtered.filter(value => value.name.toLowerCase().includes(form.name.toLowerCase()))
    }
    if (form.username) {
      filtered = filtered.filter(value => value.username.toLowerCase().includes(form.username.toLowerCase()))
    }
    if (form.email) {
      filtered = filtered.filter(value => value.email.toLowerCase().includes(form.email.toLowerCase()))
    }
    setUsersFiltered(filtered);
  };

  return (
    <div>

      <Form filterUsers={filterUsers}/>
      {usersFiltered.map(user => <User key={user.id} user={user}/>)}

    </div>
  );
}

export default App;
